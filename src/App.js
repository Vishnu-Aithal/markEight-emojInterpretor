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
  "🛸": "Flying-Suacer"
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
    } else if (inputEmoji === "") {
      return "Emoji meaning will appear here";
    } else {
      return "Sorry we dont have that emoji";
    }
  }

  return (
    <div className="App" style={{ width: "550px", maxWidth: "95vw" }}>
      <header
        style={{
          color: "#00ADB5",
          width: "550px",
          maxWidth: "90vw",
          backgroundColor: "#222831",
          borderRadius: "0 0 0.5rem 0.5rem",
          margin: "0 auto 2rem",
          padding: "0.5rem"
        }}
      >
        <h1 style={{ margin: "0 1rem 1rem" }}>Random Emojis Interpreter</h1>
      </header>
      <input
        placeholder="Enter emoji or choose from below"
        onChange={changeHandler}
        type="text"
        style={{
          marginBottom: "1rem",
          width: "500px",
          maxWidth: "90vw",
          height: "2rem"
        }}
      ></input>
      <h2>{selectedEmoji}</h2>
      <h3>{meaning}</h3>
      <div
        style={{
          width: "550px",
          maxWidth: "90vw",
          backgroundColor: "#F3F4F6",
          borderRadius: "0.5rem",
          padding: "1rem 0",
          margin: "auto"
        }}
      >
        <h3
          style={{
            marginTop: "0",
            color: "#393E46"
          }}
        >
          Emojis we know
        </h3>
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
      <footer
        style={{
          width: "550px",
          maxWidth: "90vw",
          margin: "auto",
          marginTop: "10rem",
          backgroundColor: "#222831",
          color: "#00ADB5",
          borderRadius: "0.5rem 0.5rem 0 0 "
        }}
      >
        <h3 style={{ paddingTop: "0.5rem" }}>Contact Me</h3>
        <div
          style={{
            padding: "0.5rem"
          }}
        >
          <a
            style={{
              padding: "0.5rem",
              textDecoration: "none",
              color: "#00ADB5"
            }}
            target="_blank"
            href="https://github.com/Vishnu-Aithal"
          >
            Github
          </a>
          <a
            style={{
              padding: "0.5rem",
              textDecoration: "none",
              color: "#00ADB5"
            }}
            target="_blank"
            href="https://twitter.com/Vishnu_Aithal"
          >
            Twitter
          </a>
          <a
            style={{
              padding: "0.5rem",
              textDecoration: "none",
              color: "#00ADB5"
            }}
            target="_blank"
            href="www.linkedin.com/in/vishnu-aithal"
          >
            linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}

