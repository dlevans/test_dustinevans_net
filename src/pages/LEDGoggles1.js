import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function LEDgoggles1({images, setImages}) {

  const query = "ledgoggles1";

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
      <h1>LED Goggles 1</h1>
        <p>
        These LED Goggles use <a href="http://www.adafruit.com/products/1463">Adafruit's NeoPixel Rings</a>, an Arduino, and a Nintendo Wii Nunchuck.
        The Z Button on the Nunchuck controls the single pixel's color while the C Button controls the entire ring's color.
        Pressing and holding both buttons will make the LED Ring <a href="http://sean.voisen.org/blog/2011/10/breathing-led-with-arduino/">"breathe"</a>.
        Moving the Nunchuck's joystick left and right will spin the single pixel around the ring in that direction. Up and down on the joystick controls the brightness.
        At first the LEDs were always at full brightness... this caused a lot of people to duck and hide. These rings are BRIGHT!
        <br></br><br></br>
        Thursday was a costume contest put on by <a href="https://www.facebook.com/snnict">SNN:ICT</a>.
        <br></br><br></br>        
        Let's just say Batman didn't stand a chance!
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

export default LEDgoggles1;
