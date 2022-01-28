import React from "react";

export default function Form() {
  return (
    <main>
      <div className="form">
        <input
          type="text"
          id="text1"
          className="form--input"
          placeholder="Shut up"
        />
        <input
          type="text"
          id="text2"
          className="form--input"
          placeholder="and take my money"
        />
        <button type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
