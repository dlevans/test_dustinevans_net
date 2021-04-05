import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function DNAArcade({images, setImages}) {

  const query = "arcade";

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
      <h1>DNA Arcade</h1>
        <p>
        DNA stands for Dustin and Nick Arcade. 
        The brains were salvaged from an old laptop a friend gave me with a broken screen. 
        The buttons and control board are both from http://ultimarc.com/ We found a NES and SNES emulator that works from the command line. 
        The software Nick wrote launches the appropriate emulator for the selected game in the background. The .rar has the source code and the emulators.        
        </p>        
          <ul>
            <li><b>Parts List:</b></li>
              <li>3 - 5/8" MDF (4' x 8')</li>
              <li>5 - 2"x2"x8'5</li>
              <li>75 - 1 5/8" Coated Screws 75</li>
              <li>16 - Bolts for your casters (2" length by 1/4" diameter or larger)</li>
              <li>1 - Small bottle of wood glue</li>
              <li>1 - Wood putty or filler (covers your gaps and screw holes… optional)</li>
              <li>2 - Spray cans of oil based primer (DO NOT USE WATER BASED PAINT ON MDF)</li>
              <li>1 - 100' 18 Gauge Stranded Copper Wire (Red)</li>
              <li>1 - 100' 18 Gauge Stranded Copper Wire (Black)</li>
              <li>24 - 18 Gauge Femal Disconnects</li>
              <li>1 - 2" x 2" PCB (or other distrobution mechanism for ground wires)</li>
              <li>8+ - Arcade Buttons (Ultimarc.com)</li>
              <li>1+ - Joystick (Ultimarc.com)</li>
              <li>1 - Control Driver for buttons/Joystick (Ultimarc.com or you can DIY from a PC keyboard)</li>
              <li>1+ - PC Speakers (we used two pair)</li>
              <li>1 - Monitor</li>
              <li>1 - Computer (We used the bottom half of a laptop. Raspberry Pi works just as well if you want to write your own interface or use Retro Pi)</li>
              <li>1 - Lights (We used UV cold cathodes from Micro Center… Optional)</li>
              <li>1 - Quart of paint (We used exterior paint to help be a moisture barrier...optional)</li>
              <li>4 - Casters (wheels… optional but recommended)</li>
              <li>1 - 32" x 32" Sheet of Plexiglass cut to fit (They typically sell and cut this stuff at hardware stores.. Optional)</li>
          </ul>
          <ul>
            <li><b>Tools:</b></li>
              <li>Circular Saw</li>
              <li>Electric Drill</li>
              <li>Reciprocating Saw (or a hand held router)</li>
              <li>Soldering Iron</li>
              <li>Wire Cutters/Strippers</li>
              <li>Hot Glue Gun</li>
              <li>Large Clamps</li>
              <li>Patience</li>
          </ul>
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

export default DNAArcade;
