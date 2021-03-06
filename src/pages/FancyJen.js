import React, {useEffect} from "react";
import axios from 'axios'
import { faInstagram, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";

function FancyJen({images, setImages}) {

  const query = "fancyjen";

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
        <h1>Fancy Jen Cosplay <br></br>
        <a href="https://www.instagram.com/fancyjencosplay/">
                  <FontAwesomeIcon icon={faInstagram} />
        </a>      
        <span >Instagram</span>
        <a href="https://twitter.com/CosplayJen">
                  <FontAwesomeIcon icon={faTwitter} />
        </a>
        <span >Twitter</span>      
        <a href="https://www.tiktok.com/@fancyjencosplay/">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <span >TikTok</span>      
        <a href="https://www.youtube.com/channel/UCJ7V8oaTq2lukZtyyet788w">
                  <FontAwesomeIcon icon={faYoutube} />
        </a>
        <span >YouTube</span>      
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

export default FancyJen;
