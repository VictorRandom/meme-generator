import React, { useState } from "react";
import memesData from "./memesData";

export default function Form() {
  let url;
  const [meme, setMeme] = useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  // Criando um estado para o meme inicial
  const [allMemes, setAllMemes] = useState(memesData)

  // Função para retornar uma imagem aleatória de meme
  function getImage() {
    const memeArray = allMemes.data.memes;
    const oneMeme = Math.floor(Math.random() * memeArray.length);
    url = memeArray[oneMeme].url;

    setMeme(prevMeme =>({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const { name, value } = event.target;
    setMeme(prevMeme => ({

        ...prevMeme,
        [name]: value
      

    })
  )}
  

  return (
    <main>
      {/* <p>{url}</p> */}
      <div className="form">
        <input
          type="text"
          id="text1"
          className="form--input"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          id="text2"
          className="form--input"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          onClick={getImage} 
          className="form--button"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
