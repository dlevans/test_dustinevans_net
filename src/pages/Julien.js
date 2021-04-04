import React, {useEffect} from "react";
import axios from 'axios'
import { faInstagram, faFacebook,  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";


function Julien({images, setImages}) {

  const query = "julien";

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
        <h1>Julien<br></br>
        <a href="https://www.instagram.com/shotsbyjuju/">
                  <FontAwesomeIcon icon={faInstagram} />
        </a>      
        <span >Instagram</span>
        <a href="https://www.shotsbyjuju.com/">
                  <FontAwesomeIcon icon={faGlobeAmericas} />
        </a>
        <span >Website</span>      
        <a href="https://www.facebook.com/shotsbyjuju">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <span >Facebook</span>                 
        </h1>        
      </div>
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

export default Julien;
