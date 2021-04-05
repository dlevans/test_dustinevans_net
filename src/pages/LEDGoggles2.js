import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function LEDgoggles2({images, setImages}) {

  const query = "ledgoggles2";

  async function getImages() {
    return axios.get("db.json");  }

    useEffect(() => {
      async function initImages() {
        // if no images loaded, load 'em
        //if (images.length === 0) {
          const getImagesResponse = await getImages();
          const newImages = getImagesResponse.data.images.filter(image => image.searchterm.toLowerCase().includes(query.toLowerCase().trim()));
          //debugger;        
          //setImages(getImagesResponse.data.images);
          setImages(newImages);
        //}
      }
      initImages();
    },);    

  return (
    <div className="page">
      <h1>LED Goggles 2</h1>
        <p>
        This page is for my second pair of LED Goggles. The first ones worked well but had their own share of problems. The cables were too long and having the Wii Nunchuck in my pocket meant the goggles kept changing colors or blinding people when I didn't want them to.
        <br></br><br></br>
        These new goggles use the <a href="http://www.adafruit.com/gemma">Adafruit Gemma</a> and all of the electronics are hidden inside the googles. The only part that is visible on this new pair is the battery but that will be hidden once I get a <a href="http://www.adafruit.com/products/1317">smaller LiPo</a>.
        <br></br><br></br>
        The Gemma has 3 pins, enough to control the LED Rings and add two buttons. Each button controls one eye of the goggles.
        <br></br><br></br>
        Source code for this project can be found <a href="https://docs.google.com/document/d/1BLR7DtqRX9Zx8ENTMky30WL38ggTbAj6gjWU8kVdI6Q/edit?usp=sharing">here</a> .
        </p>

        {images.map(image => (
            <div className="item" key={image.id}>
            <li>
              <a href={image.url+image.filename} target="_blank" rel="noopener noreferrer">
                <img alt={image.alt} src={image.thumbnail+image.filename} />
              </a>
              <span className="caption">
                {image.id} <br></br>
                {image.client}<br></br>
                {image.alt}
              </span>
            </li>
          </div>
          ))
          }
        <Footer />
    </div>
  );
}

export default LEDgoggles2;
