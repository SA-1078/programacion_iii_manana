import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


interface UserPaginationOptions extends IPaginationOptions {
  search?: string;
  searchField?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });
      return await this.userRepository.save(user);
    } catch (err) {
      console.error('Error creating user:', err);
      return null;
    }
  }

  async findAll(options: UserPaginationOptions): Promise<Pagination<User>> {
    const { search, searchField, sortBy, sortOrder } = options;

    const queryBuilder = this.userRepository.createQueryBuilder('user');

    const allowedSearchFields = ['email', 'username'];
    const allowedSortFields = ['id', 'username', 'email'];

    if (search && searchField && allowedSearchFields.includes(searchField)) {
      queryBuilder.andWhere(
        `LOWER(user.${searchField}) LIKE :search`,
        { search: `%${search.toLowerCase()}%` },
      );
    }

    const orderField = sortBy && allowedSortFields.includes(sortBy) ? sortBy : 'id';
    const orderDirection: 'ASC' | 'DESC' =
      sortOrder === 'DESC' ? 'DESC' : 'ASC';

    queryBuilder.orderBy(`user.${orderField}`, orderDirection);

    return paginate<User>(queryBuilder, {
      page: options.page,
      limit: options.limit,
    });
  }

  async findOne(id: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding user:', err);
      return null;
    }
  }

  async findByUsername(username: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { username } });
    } catch (err) {
      console.error('Error finding user by username:', err);
      return null;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) return null;

      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
      }

      Object.assign(user, updateUserDto);
      return this.userRepository.save(user);
    } catch (err) {
      console.error('Error updating user:', err);
      return null;
    }
  }

  async remove(id: string): Promise<User | null> {
    try {
      const user = await this.findOne(id);
      if (!user) return null;

      return await this.userRepository.remove(user);
    } catch (err) {
      console.error('Error deleting user:', err);
      return null;
    }
  }

  async updateProfile(id: string, filename: string): Promise<User | null> {
    try {
      const user = await this.findOne(id);
      if (!user) return null;

      user.profile = filename;
      return await this.userRepository.save(user);
    } catch (err) {
      console.error('Error updating user profile image:', err);
      return null;
    }
  }
}