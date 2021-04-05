import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function RetroPie({images, setImages}) {

  const query = "retropie";

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
      <h1>Retro Pie</h1>
        <p>
          **This post is mainly for historical purposes. These steps may be out of date.**
          <br></br>
          <br></br>
          <br></br>
          This post will show you how to get your Raspberry Pi setup with RetroPie in just a few steps.
          <br></br>
          <br></br>
          <b>Downloads:</b> <br></br>
        </p>
        <ul>
        <li><a href="https://dustinevans.net/files/RetroPie.img">My RetroPie Image</a> - The RetroPie Image I've setup.</li>
        <li><a href="http://sourceforge.net/projects/win32diskimager/">My RetroPie Image</a> - To write the image to your SD Card.</li>
        <li><a href="http://www.advanced-ip-scanner.com/">My RetroPie Image</a> - To find the IP address of your Raspberry Pi.</li>
        </ul>
        <br></br>
        <br></br>
        *This image should have everything setup and ready to go to use your Xbox Controller. This image does <b>NOT</b> contain any ROMs.
        <br></br>
        <b>The first time you set this up you will need to pair the Xbox Controller and Wireless Adapter.</b>
        <br></br>
        Plug in the adapter to your Windows computer, install the software, and pair your Xbox Controller. After that, you can plug in the adapter to your Raspberry Pi and everything should work. If your RetroPie has an "input config" screen. Do not click start on that screen. Everything is setup already. I clicked it to try to make it go away and my RetroPie install messed up for awhile. It worked in the end.
        <br></br>
        Just be careful.
        <br></br>
        <b>Please, do not ask me where to find ROMs.</b>
        <br></br>
        <br></br>
        <b>Hardware:</b>
        <ul>
          <li>
            <a href="http://www.amazon.com/s/ref=nb_sb_ss_i_0_12?url=search-alias%3Dvideogames&field-keywords=xbox%20360%20wireless%20controller&sprefix=xbox+360+wir%2Cvideogames%2C210&rh=i%3Avideogames%2Ck%3Axbox%20360%20wireless%20controller">Xbox 360 Controller</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.amazon.com/Microsoft-Xbox-360-Wireless-Receiver-Official/dp/B00E0OB7MW">Xbox 360 Wireless Adapter</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.adafruit.com/products/998">Raspberry Pi</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.adafruit.com/products/1320">Raspberry Pi Case*</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=hdmi%20cable&sprefix=hdmi+c%2Caps&rh=i%3Aaps%2Ck%3Ahdmi%20cablehttp://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=hdmi%20cable&sprefix=hdmi+c%2Caps&rh=i%3Aaps%2Ck%3Ahdmi%20cable">HDMI Cable</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.radioshack.com/product/index.jsp?productId=2989800">HDMI Right Angle Adapter</a><br></br><br></br>
          </li>
          <li>
            <a href="https://shop.hobbylobby.com/products/wood-box-set-with-brass-hardware-302547/">Nice box from Hobby Lobby*</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=micro%20usb%20cable&sprefix=micro+u%2Caps&rh=i%3Aaps%2Ck%3Amicro%20usb%20cable">Micro USB Cable</a><br></br><br></br>
          </li>
          <li>
            <a href="http://www.adafruit.com/products/501">Power Supply</a><br></br><br></br>
          </li>
          <li>
          8 GB SD Card**<br></br><br></br>
          </li>
        </ul>
        Parts should cost less than $150. (Let me know if I missed something.)<br></br><br></br>
        *Not needed<br></br><br></br>
        **At least 4 GB. I chose 8 to make sure I had room for ROMs.<br></br><br></br>
        <b>Install Guide:</b><br></br><br></br>
        1. Download my RetroPie Image.<br></br><br></br>
        2. Burn it to your SD Card. Instructions here.<br></br><br></br>
        3. Put the SD Card in the Raspberry Pi, connect your internet and video cables, and plug in your Raspberry Pi.<br></br><br></br>
        <b>Installing ROMs:</b><br></br><br></br>
        Follow this <a href="http://github.com/petrockblog/RetroPie-Setup/wiki/How-to-get-ROMs-on-the-SD-card">guide</a>.<br></br><br></br>
        <b>Controls:</b><br></br><br></br>        
        <a href="https://dustinevans.net/images/retropie/mainmenu.png">Main Menu<br></br><br></br></a>
        <a href="https://dustinevans.net/images/retropie/nes.png">NES<br></br><br></br></a>
        <a href="https://dustinevans.net/images/retropie/snes.png">SNES<br></br><br></br></a>
        
        I'm still working on the buttons for sega. If you have a good config file you use, let me know!<br></br><br></br>
        <a href="https://dustinevans.net/images/retropie/sega.png">SEGA<br></br><br></br></a>
        
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

export default RetroPie;
