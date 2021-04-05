import React, {useEffect} from "react";
import axios from 'axios'
import Footer from "../Footer";

function BB8({images, setImages}) {

  const query = "bb8";

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
      <h1>BB-8</h1>
        <p>
        I saw <a href="https://www.youtube.com/watch?v=1Rkq6M9SdCc">this</a> project on YouTube and decided to try it out.
        <br></br><br></br>
        Thanks to his video and <a href="https://github.com/jjinking/SpheroBB8-python">Joseph Kim's GitHub page</a> I was finally able to get this project off the ground. 
        His code is adapted from (and uses code from) <a href="https://github.com/mmwise/sphero_ros/tree/groovy-devel/sphero_driver/src/sphero_driver">davinellulinvega's</a> and <a href="https://gist.github.com/ali1234/5e5758d9c591090291d6">ali1234's</a> repos as well so be sure to check out them out while you're there.
        <br></br><br></br>
        This page is a guide on how I got Joseph's code working on a Raspberry Pi 2 with a BTLE Dongle as well as a Raspberry Pi 3 using its built-in BTLE functionality.

          <h2>Raspberry Pi 2</h2>
          <p>
          <a href="http://www.amazon.com/ASUS-USB-Adapter-Bluetooth-USB-BT400/dp/B00DJ83070">This</a> is the dongle I'm using.
          <br></br><br></br>
          <ul>
            <li>1 Download Jessie</li>
            <li>2 Format SD card with the HP USB Disk Format Tool</li>
            <li>3 Write Jessie image to SD card using Win32DiskImager</li>
            <li>4 Eject your SD card from your computer and put it in your Raspberry Pi</li>
            <li>5 Plug in your keyboard, xbox 360 controller, BTLE Dongle, Ethernet cable, and HDMI cable.</li>
            <li>6 Plug in power and let your Pi boot up. (It will probably boot to the Desktop but this is okay.)</li>
            <li>7 On a computer SSH into your Pi using Putty (you'll need to get your Pi's IP from the Pi or your network settings)</li>
            <li>8 First thing you want to do is run sudo apt-get update and then run sudo apt-get upgrade (upgrade can take awhile) finally run sudo apt-get clean See here for more info.</li>
            <li>9 Reboot your Raspberry Pi sudo reboot</li>
            <li>10 Launch Raspi Config sudo raspi-config</li>
            <li>11 Expand Filesystem</li>
            <li>12 Under Boot Options select B1 Console</li>
            <li>13 Click OK and then Finish and reboot your Pi again</li>
          </ul>
          <br></br><br></br>
          Now that that's done, let's set up your Pi to talk with BB-8
          <br></br><br></br>
          <ul>
            <li><b>Run these commands on the Putty SSH session:</b></li>
            <li>1 sudo apt-get install python-pip libglib2.0-dev</li>
            <li>2 sudo pip install bluepy</li>
            <li>3 mkdir BB8</li>
            <li>4 cd BB8</li>
            <li>5 wget https://github.com/jjinking/SpheroBB8-python/archive/master.zip</li>
            <li>6 unzip master.zip</li>
            <li>7 cd SpheroBB8-python-master</li>
            <li>8 Run the ls command you should see a couple .py files and a README.md file. These are the python programs we need to control BB8.</li>
            <li>9 Run sudo hcitool lescan and look for something like this: XX:XX:XX:XX:XX:XX BB-7CA6 the XX:XX:XX:XX:XX:XX is your BB8's MAC address and we'll need that in a second. So copy and paste it somewhere. Press CTRL+C to stop the scan.</li>
            <li>10 Run sudo nano BB8_driver.py and replace the MAC_ADDR address with your BB8's MAC address once you've updated the MAC address press CTRL+O (oh, not zero), Enter, and then CTRL+X to save and close.</li>
            <li>11 To test the connection run:sudo python BB8test.py</li>
          </ul>
          <br></br><br></br>
          The lights should blink. First the light will be white and once it's connected it will cycle through red, blue, and green. Once the program is done it will disconnect from the BB8 and the light will turn orange meaning it's been disconnected.
          <br></br><br></br>
          <ul>
            <li><b>If the lights blink, congratulations!! Your Pi can talk to your BB8! Next we'll test the Xbox Controller.</b></li>
            <li>1 Run sudo python BB8joyDrive.py</li>
            <li>If you're not running this through SSH on a different computer, a window should pop up with a graph. The green dot in the middle is the left joystick on the Xbox Controller. Push the buttons and watch BB8 respond.</li>
            <li>2 Move the joystick around and BB8 should move, too.</li>
            <li>3 That's it. Congratulations on getting BB8 working with your Raspberry Pi 2!!</li>
          </ul>
          
          </p>
          <h2>Raspberry Pi 3</h2>
          <p>
            <ul>
              <li><b>Run these commands on the Putty SSH session:</b></li>
              <li>1 Run sudo apt-get update Next run sudo apt-get upgrade (this can take awhile) Finally run sudo apt-get clean
                <br></br>
                See here for more info.
              </li>
              <li>2 Reboot your Raspberry Pi sudo reboot</li>
              <li>3 Launch Raspi Config sudo raspi-config</li>
              <li>4 Expand Filesystem</li>
              <li>5 Under Boot Options select B1 Console</li>
              <li>6 Click OK and then Finish and reboot your Pi again</li>
              <li>7 sudo apt-get install python-pip libglib2.0-dev</li>
              <li>8 sudo pip install bluepy</li>
              <li>9 mkdir BB8</li>
              <li>10 cd BB8</li>
              <li>11 wget https://github.com/jjinking/SpheroBB8-python/archive/master.zip</li>
              <li>12 unzip master.zip</li>
              <li>13 cd SpheroBB8-python-master</li>
              <li>14 Run the ls command you should see a couple .py files and a README.md file. These are the python programs we need to control BB8.</li>
              <li>15 Run sudo hcitool lescan and look for something like this: XX:XX:XX:XX:XX:XX BB-7CA6 the XX:XX:XX:XX:XX:XX is your BB8's MAC address and we'll need that in a second. So copy and paste it somewhere. (Press CTRL+C to stop the scan.)</li>
              <li>16 Run sudo nano BB8_driver.py and replace the MAC_ADDR address with your BB8's MAC address once you've updated the MAC address press CTRL+O (oh, not zero), Enter, and then CTRL+X to save and close.</li>
              <li>17 To test the connection run:sudo python BB8test.py</li>
            </ul>
            <br></br><br></br>

          The lights should blink. First the light will be white and once it's connected it will cycle through red, blue, and green. Once the program is done it will disconnect from the BB8 and the light will turn orange meaning it's been disconnected.
          <br></br><br></br>
          If the lights blink, congratulations!! Your Pi can talk to your BB8! Next we'll test the Xbox Controller
          <br></br><br></br>
          <ul>
            <li>1 Run sudo python BB8joyDrive.py
              <br></br>
              If you're not running this through SSH on a different computer, a window should pop up with a graph. The green dot in the middle is the left joystick on the Xbox Controller. Push the buttons and watch BB8 respond.
            </li>
            <li>2 Move the joystick around and BB8 should move, too.</li>
            <li>3 That's it. Congratulations on getting BB8 working with your Raspberry Pi 2!!</li>
          </ul>
          </p>
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

export default BB8;
