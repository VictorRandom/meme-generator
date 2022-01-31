import React, {useState} from "react";
import memesData from "./memesData";

export default function Form() {

  let url;
  const [memeImage, setMemeImage] = useState("")

  function getImage(){
    const allMemes = memesData.data.memes;
    const oneMeme = Math.floor(Math.random()*allMemes.length);
    url = allMemes[oneMeme].url;

    setMemeImage(url);
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
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
