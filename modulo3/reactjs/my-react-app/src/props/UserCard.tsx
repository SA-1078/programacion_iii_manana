
export default function UserCard({ user }) {
    return <div>{user.name} - {user.age} años</div>;
}

const userData = { name: "Carlos", age: 30 };

