import React from "react";
import memesData from "./memesData";

export default function Form() {

  function getImage(){
    const allMemes = memesData.data.memes;
    const oneMeme = allMemes[Math.floor(Math.random()*allMemes.length)];
    console.log(oneMeme.url);
  }

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
        <button onClick={getImage} type="submit" className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
