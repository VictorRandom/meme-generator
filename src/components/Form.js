import React, { useState } from "react";
import memesData from "./memesData";

export default function Form() {
  let url;
  const [meme, setMeme] = useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemes, setAllMemes] = useState(memesData)

  function getImage() {
    const memeArray = allMemes.data.memes;
    const oneMeme = Math.floor(Math.random() * memeArray.length);
    url = memeArray[oneMeme].url;

    setMeme(prevMeme =>({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <p>{url}</p>
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
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
