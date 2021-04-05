import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function BlueNES2({images, setImages}) {

  const query = "bluenes2";

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
      <h1>Blue NES 2</h1>
        <p>
        The blueNES 2 is a follow-up to the blueNES. Instead of using an Arduino, the blueNES 2 uses Adafruit's Bluefruit. When connected to ground pins 0 - 11 on the Bluefruit will send a keyboard command.
        I've connected mine to an old NES controller. It's that simple. The controller pinout I found on this Instructables.

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

export default BlueNES2;
