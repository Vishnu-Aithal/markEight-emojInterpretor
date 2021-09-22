import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout-Box",
  "❤️": "Love",
  "😑": "Annoyance",
  "💤": "Sleeping",
  "📢": "Loud-Speaker",
  "⚕️": "Medical-symbol",
  "©️": "Copyright-Symbol",
  "™️": "Trade-Mark",
  "🏪": "Convenience-Store",
  "🏭": "Factory",
  "🛸": "Flying-Suacer",
  "": "Emoji meaning will apper here"
};

var listOfEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Emoji meaning will appear here");
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function changeHandler(inputEmoji) {
    var currentEmoji = inputEmoji.target.value;
    setSelectedEmoji(currentEmoji);
    setMeaning(findMeaning(currentEmoji));
  }

  function clickHandler(clickedEmoji) {
    setSelectedEmoji(clickedEmoji);
    setMeaning(findMeaning(clickedEmoji));
  }

  function findMeaning(inputEmoji) {
    if (inputEmoji in emojiDictionary) {
      return emojiDictionary[inputEmoji];
    } else {
      return "Sorry we dont have that emoji";
    }
  }

  return (
    <div className="App" style={{ maxWidth: "90vw" }}>
      <h1>Emoji interpreter</h1>
      <input
        placeholder="Enter emoji or choose from below"
        onChange={changeHandler}
        type="text"
        style={{ marginBottom: "1rem", width: "20rem" }}
      ></input>
      <h2>{selectedEmoji}</h2>
      <h3>{meaning}</h3>
      {listOfEmojis.map((emoji) => (
        <span
          onClick={() => clickHandler(emoji)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            marginTop: "2rem",
            cursor: "pointer"
          }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

