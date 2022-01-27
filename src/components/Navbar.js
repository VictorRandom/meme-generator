import React from 'react';

export default function Navbar(){
    return(
        <div className="navbar">
            <div id="logo">
                <img src="./trollface.png" alt="trollface" style={{width:'30px'}}></img>
                <div id="title">Meme Generator</div>
            </div>
            <div id="info">React Course - Project 3</div>
        </div>
    )
}