import React, { useState, useEffect } from "react";
// import memesData from "./memesData";

export default function Form() {
  let url;
  const [meme, setMeme] = useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    topText: "one does not simply",
    bottomText: "walk into mordor",
  });

  // Criando um estado para o meme inicial
  const [allMemes, setAllMemes] = useState([])

  // Função para retornar uma imagem aleatória de meme
  function getImage() {
    // const memeArray = allMemes;
    const oneMeme = Math.floor(Math.random() * allMemes.length);
    url = allMemes[oneMeme].url;

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

  useEffect(async () => {
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }

    getMemes();
    
    // fetch("https://api.imgflip.com/get_memes")
    //   .then(res => res.json())
    //   .then(data => setAllMemes(data.data.memes))
  }, [])


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
