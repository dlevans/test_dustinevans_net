import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function Vehicles({images, setImages}) {

  const query = "vehicles";

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
        <h1>Vehicles</h1>
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

export default Vehicles;
