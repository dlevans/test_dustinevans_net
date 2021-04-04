import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Images() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const cosplay = [
    {src: "http://photos.dustinevans.net/Images/Ayrcyia/2020/Shoot2/JPGs/IMG_1692.jpg"},
    {src: "http://photos.dustinevans.net/Images/Ayrcyia/2020/Shoot2/JPGs/IMG_1953.jpg"},
    {src: "http://photos.dustinevans.net/Images/Ayrcyia/2020/Shoot2/JPGs/IMG_2075.jpg"}
  ];

  const portraits = [
    {src: "http://photos.dustinevans.net/Images/Ayrcyia/2020/Shoot1/JPGs/IMG_0751.jpg"},
    {src: "http://photos.dustinevans.net/Images/Portraits/KC%20Superman/2018/IMG_7641.png"},
    {src: "http://photos.dustinevans.net/Images/Portraits/Julien/2020/IMG_0534.jpg"}
  ];

  const landscape = [
    {src: "http://photos.dustinevans.net/Images/Landscape/KansasCity/2020/IMG_0560.jpg"},
    {src: "http://photos.dustinevans.net/Images/Landscape/Portland/2018/Hood_2.png"},
    {src: "http://photos.dustinevans.net/Images/Landscape/KansasCity/2018/IMG_7626.png"}
  ];

  const street = [
    {src: "http://photos.dustinevans.net/Images/Cars/Nick/JPGs/IMG_2172.jpg"},
    {src: "http://photos.dustinevans.net/Images/Cars/Nick/JPGs/IMG_2188.jpg"},
    {src: "http://photos.dustinevans.net/Images/Landscape/KansasCity/2020/IMG_0607.jpg"}    
  ];

  const photoshop = [
    {src: "http://photos.dustinevans.net/Images/Photoshop/color.png"},
    {src: "http://photos.dustinevans.net/Images/Photoshop/firepainting.jpg"},
    {src: "http://photos.dustinevans.net/Images/Photoshop/leia_1.png"}    
  ];

  const clearlyguilty = [
    {src: "http://photos.dustinevans.net/Images/ClearlyGuilty/2019/thumbnails/IMG_9567.jpg"},
    {src: "http://photos.dustinevans.net/Images/ClearlyGuilty/2019/thumbnails/IMG_9636.jpg"},
    {src: "http://photos.dustinevans.net/Images/ClearlyGuilty/2020/thumbnails/IMG_1583.jpg"}    
  ];

  const valkyriebritannia = [
    {src: "http://photos.dustinevans.net/Images/ValkyrieBritannia/2020/thumbnails/IMG_3874.jpg"},
    {src: "http://photos.dustinevans.net/Images/ValkyrieBritannia/2020/thumbnails/IMG_3714.jpg"},
    {src: "http://photos.dustinevans.net/Images/ValkyrieBritannia/2020/thumbnails/IMG_3737.jpg"}    
  ];

  return (
    <div className="page">
      <h1>Images </h1>

      <div className="item">
        <Link to="/cosplay" style={{textDecoration: 'none', color: 'white'}}>
          <img alt="cosplay" src={cosplay[getRandomInt(0,cosplay.length)].src} ></img>
          <span className="caption">Cosplay</span>
        </Link>
      </div>

      <div className="item">
      <Link to="/portraits" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="portraits" src={portraits[getRandomInt(0,portraits.length)].src} ></img>
      <span className="caption">Portraits</span>
      </Link>
      </div>
      
      <div className="item">
      <Link to="/landscape" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="landscape" src={landscape[getRandomInt(0,landscape.length)].src} ></img>
      <span className="caption">Landscape</span>
      </Link>
      </div>
      
      <div className="item">
      <Link to="/street" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="street" src={street[getRandomInt(0,street.length)].src} ></img>
      <span className="caption">Street</span>
      </Link>
      </div>

      <div className="item">
      <Link to="/photoshop" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="photoshop" src={photoshop[getRandomInt(0,photoshop.length)].src} ></img>
      <span className="caption">Photoshop</span>
      </Link>
      </div>

      <div className="item">
      <Link to="/clearlyguilty" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="clearlyguilty" src={clearlyguilty[getRandomInt(0,clearlyguilty.length)].src} ></img>
      <span className="caption">Clearly Guilty</span>
      </Link>
      </div>

      <div className="item">
      <Link to="/valkyriebritannia" style={{textDecoration: 'none', color: 'white'}}>
      <img alt="valkyriebritannia" src={valkyriebritannia[getRandomInt(0,valkyriebritannia.length)].src} ></img>
      <span className="caption">Valkyrie Britannia</span>
      </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Images;
