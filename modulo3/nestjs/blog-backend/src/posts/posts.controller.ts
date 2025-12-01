import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Post as PostEntity } from './post.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @HttpPost()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createPostDto: CreatePostDto): Promise<SuccessResponseDto<PostEntity>> {
    const post = await this.postsService.create(createPostDto);
    return new SuccessResponseDto('Post created successfully', post);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('searchField') searchField = 'title',
    @Query('sortBy') sortBy = 'id',
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
  ): Promise<SuccessResponseDto<Pagination<PostEntity>>> {
    limit = limit > 100 ? 100 : limit;

    const result = await this.postsService.findAll({
      page: Number(page),
      limit: Number(limit),
      search,
      searchField,
      sortBy,
      sortOrder,
    });

    return new SuccessResponseDto('Posts retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SuccessResponseDto<PostEntity>> {
    const post = await this.postsService.findOne(id);
    return new SuccessResponseDto('Post retrieved successfully', post);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<SuccessResponseDto<PostEntity>> {
    const updated = await this.postsService.update(id, updatePostDto);
    return new SuccessResponseDto('Post updated successfully', updated);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string): Promise<SuccessResponseDto<null>> {
    await this.postsService.remove(id);
    return new SuccessResponseDto('Post deleted successfully', null);
  }
}
