const emojis = ['😊', '🚀', '🎉', '💻'];

export default function EmojiList() {
    return (
        <ul>
            {emojis.map((emoji, index) => (
                <li key={index}>{emoji}</li>
            ))}
        </ul>
    );
}