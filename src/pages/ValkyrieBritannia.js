import React, {useEffect} from "react";
import axios from 'axios'
import { faInstagram, faEtsy } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";

function ValkyrieBritannia({images, setImages}) {

  const query = "ValkyrieBritannia";

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
      <div class="page-nav" >
        <h1>Valkyrie Britannia<br></br>
        <a href="https://www.instagram.com/valkyriebritannia/">
                  <FontAwesomeIcon icon={faInstagram} />
        </a>      
        <span >Instagram</span>
        <a href="https://www.etsy.com/shop/valkyriebritannia">
                  <FontAwesomeIcon icon={faEtsy} />
        </a>
        <span >Etsy</span>           
        </h1>        
      </div>
      <h1>Valkyrie Britannia</h1>
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

export default ValkyrieBritannia;
