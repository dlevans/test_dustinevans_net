import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function TesseractCase({images, setImages}) {

  const query = "tesseract";

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
      <h1>Tesseract Case</h1>
        <p>
        <a href="http://en.wikipedia.org/wiki/The_Avengers_(2012_film)">The Avengers</a> is one of my favorite movies from recent years. I really like the way all of their story lines come together in a huge epic battle. 
        I saw a guide online awhile back on making your own <a href="http://www.therpf.com/f78/build-tesseract-cosmic-cube-must-any-avengers-costume-picture-heavy-154280/">Tesseract</a> and wanted to build my own case, too.         
        If you're not sure what I'm talking about, watch <a href="http://youtu.be/PngzUEsOZZI?t=1m59s">this</a>.
        <br></br><br></br>
        Inside is an Arduino with a spectrum shield and BlueSmirf Bluetooth Modem from SparkFun, a Raspberry Pi, 7" LCD Monitor, two speakers, a digital amp, a WiFi Card, and 2 strips of NeoPixels I got from Adafruit. The case I got from Harbor Freight.
        <br></br><br></br>
        The monitor has two video inputs. The Raspberry Pi has an RCA splitter that connects to the monitor and a video out on the side of the case. The second video input is wired to an RCA coupler on the side of the case. The audio is connected the same way. This means I can have audio or video connected to the case or brought out to a different system. In my living room, I had it connected to my projector.
        I'm running Raspbian on the Pi with a stand-alone version of XBMC. I followed this guide to make the Pi broadcast its own wireless network. That setup along with AllCast allows me to send movies on my Nexus 7 to the Pi without me having to touch a thing. This is great because I conduct electricity like a member of the X-Men and actually broke one of my LEDs when I zapped the case on accident. 
        
        The Bluesmirf allows me to connect to, and change the LEDs with a custom Android app I wrote.
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

export default TesseractCase;
