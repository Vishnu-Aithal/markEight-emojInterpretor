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

  function changeHandler(userEmoji) {
    setSelectedEmoji(userEmoji.target.value);
  }

  function clickHandler(userEmoji) {
    setSelectedEmoji(userEmoji);
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
      {listOfEmojis.map((Emoji) => (
        <span
          onClick={clickHandler}
          style={{ fontSize: "2rem", padding: "0.5rem", marginTop: "2rem" }}
        >
          {" "}
          {Emoji}{" "}
        </span>
      ))}
    </div>
  );
}
