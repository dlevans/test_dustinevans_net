import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function ITable({images, setImages}) {

  const query = "itable";

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
      <h1>iTable</h1>
        <p>
        The iTable is a hand made coffee table and iPod Dock. It was built at my friend Damion's house and took around a year to build.
        <br></br><br></br>
        This was my very first Arduino project and my very first project to ever make it on <a href="https://www.instagram.com/clearlyguilty/">HackADay</a>     
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

export default ITable;
