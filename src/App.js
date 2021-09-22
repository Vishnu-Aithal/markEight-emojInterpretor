import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "💤": "Sleeping",
  "📢": "Loud-Speaker",
  "⚕️": "Medical-symbol",
  "©️": "Copyright-Symbol",
  "™️": "Trade-Mark",
  "🏪": "Convenience-Store",
  "🏭": "Factory",
  "🛸": "Flying-Suacer",
  "": "Search your emoji"
};

var listOfEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Search your emoji");
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
      <h1>Emoji Interpretor</h1>
      <input
        onChange={changeHandler}
        type="text"
        style={{ marginBottom: "1rem" }}
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
