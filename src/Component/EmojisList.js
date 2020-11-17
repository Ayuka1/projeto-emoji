import { Component } from "react";

export default class EmojiList extends Component { 
  render() {
    const displayEmojiName = (event) => alert(event.target.id);
    const emojis = [
      {
        emoji: "😀",
        name: "sorriso maroto",
      },
      {
        emoji: "🎉",
        name: "catchaça manito",
      },
      {
        emoji: "💃",
        name: "ragatanga",
      },
    ];
    return (
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.map}>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
