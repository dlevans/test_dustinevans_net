import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function ClearlyGuilty({images, setImages}) {

  const query = "clearly guilty";

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
    }, []);

  return (
    <div className="page">
      <h1>Clearly Guilty</h1>
          {images.map(image => (
            <div className="item" key={image.id}>
            <li>
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img alt={image.alt} src={image.url} />
              </a>
              <span className="caption">{image.alt}</span>
            </li>
          </div>
          ))
          }
        
        <Footer />
    </div>
  );
}

export default ClearlyGuilty;
