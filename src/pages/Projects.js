import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Contact() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const itable = [
    {src: "https://dustinevans.net/Images/Projects/itablehad.png"}
  ];

  const retropie = [
    {src: "https://dustinevans.net/Images/Projects/retropie.png"}
  ];

  const ledgoggles1 = [
    {src: "https://dustinevans.net/Images/Projects/ledgoggles1.png"}
  ];

  const ledgoggles2 = [
    {src: "https://dustinevans.net/Images/Projects/ledgoggles2.png"}
  ];

  const bluenes1 = [
    {src: "https://dustinevans.net/Images/Projects/blueneshad.png"}
  ];

  const bluenes2 = [
    {src: "https://dustinevans.net/Images/Projects/bluenes2.png"}
  ];

  const tesseractcase = [
    {src: "https://dustinevans.net/Images/Projects/tesseract.png"}
  ];

  const dnaarcade = [
    {src: "https://dustinevans.net/Images/Projects/dna_arcade.png"}
  ];

  const bb8 = [
    {src: "https://dustinevans.net/Images/Projects/bb8.png"}
  ];

  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="item">
        <Link to="/itable" style={{textDecoration: 'none', color: 'white'}}>
          <img alt="itable" src={itable[getRandomInt(0,itable.length)].src}></img>
          <span className="caption">iTable</span>
        </Link>
      </div>

      <div className="item">
      <Link to="/retropie" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="retropie" src={retropie[getRandomInt(0,retropie.length)].src} ></img>
      <span className="caption">Retropie</span>
      </Link>
      </div>
      
      <div className="item">
      <Link to="/ledgoggles1" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="ledgoggles1" src={ledgoggles1[getRandomInt(0,ledgoggles1.length)].src} ></img>
      <span className="caption">LED Goggles 1</span>
      </Link>
      </div>
      
      <div className="item">
      <Link to="/ledgoggles2" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="ledgoggles2" src={ledgoggles2[getRandomInt(0,ledgoggles2.length)].src} ></img>
      <span className="caption">LED Goggles 2</span>
      </Link>
      </div>

      <div className="item">
        <Link to="/bluenes1" style={{textDecoration: 'none', color: 'white'}}>
          <img alt="bluenes1" src={bluenes1[getRandomInt(0,bluenes1.length)].src} ></img>
          <span className="caption">Blue NES 1</span>
        </Link>
      </div>

      <div className="item">
        <Link to="/bluenes2" style={{textDecoration: 'none', color: 'white'}}>
          <img alt="bluenes2" src={bluenes2[getRandomInt(0,bluenes2.length)].src} ></img>
          <span className="caption">Blue NES 2</span>
        </Link>
      </div>
      
      <div className="item">
      <Link to="/tesseractcase" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="tesseractcase" src={tesseractcase[getRandomInt(0,tesseractcase.length)].src} ></img>
      <span className="caption">Tesseract Case</span>
      </Link>
      </div>

      <div className="item">
        <Link to="/dnaarcade" style={{textDecoration: 'none', color: 'white'}}>
          <img alt="dnaarcade" src={dnaarcade[getRandomInt(0,dnaarcade.length)].src} ></img>
          <span className="caption">DNA Arcade</span>
        </Link>
      </div>

      <div className="item">
      <Link to="/bb8" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="bb8" src={bb8[getRandomInt(0,bb8.length)].src} ></img>
      <span className="caption">BB-8</span>
      </Link>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;
