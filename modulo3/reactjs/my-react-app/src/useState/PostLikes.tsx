
import { useState } from 'react';

export default function PostLikes() {
    const [likes, setLikes] = useState([3, 10, 8, 3]);

    const likePost = (index: any) => {
        const newLikes = [...likes];
        newLikes[index]++;
        setLikes(newLikes);
    };

    return (
        <div>
            {likes.map((like, i) => (
                <div key={i}>
                    <p>Publicación {i + 1} - Likes: {like}</p>
                    <button onClick={() => likePost(i)}>Like</button>
                </div>
            ))}
        </div>
    );
}
