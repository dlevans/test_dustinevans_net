import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function BlueNES1({images, setImages}) {

  const query = "bluenes1";

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
      <h1>Blue NES 1</h1>
        <p>
        The blueNES is an Arduino project that combines a BlueSmirf Bluetooth module to send data from the Nintendo controllers to a connected device.
        A friend gave me an old broken Nintendo that I used to house the electronics. I didn't want to cut up the controllers so I used the Player 1 port and the wires that were already inside the NES.
        Eventually I want to add Player 2 and Super Nintendo ports to make it perfect for emulators on my phone or laptop. This has been my second project to make it on <a href="https://hackaday.com/2012/06/01/nes-controllers-for-any-bluetooth-application/">Hack A Day</a>.
        Source code for this project and the files needed for your Android device can be found here.

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

export default BlueNES1;
