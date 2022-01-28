import React from 'react';

export default function Navbar(){
    return(
        <div className="navbar">
            <div id="logo">
                <img src="./trollface.png" alt="trollface" style={{width:'30px'}} />
                <h2 id="title">Meme Generator</h2>
            </div>
            <h4 id="info">React Course - Project 3</h4>
        </div>
    )
}