import React, { useState } from "react";
import Images from "./pages/Images";
import Projects from "./pages/Projects"
import Cosplay from "./pages/Cosplay";
import Portraits from "./pages/Portraits";
import Landscape from "./pages/Landscape";
import Vehicles from "./pages/Vehicles";
import ITable from "./pages/ITable";
import Retropie from "./pages/RetroPie";
import LEDgoggles1 from "./pages/LEDGoggles1";
import LEDgoggles2 from "./pages/LEDGoggles2";
import BlueNES1 from "./pages/BlueNES1";
import BlueNES2 from "./pages/BlueNES2";
import TesseractCase from "./pages/Tesseract";
import DNAArcade from "./pages/DNAArcade";
import Photoshop from "./pages/Photoshop";
import BB8 from "./pages/BB8";
import Home from "./pages/Home";
import Nav from "./Nav";
import Search from "./pages/Search";
import ClearlyGuilty from "./pages/ClearlyGuilty";
import ValkyrieBritannia from "./pages/ValkyrieBritannia";
import BlackZone from "./pages/BlackZone";
import FancyJen from "./pages/FancyJen";
import Julien from "./pages/Julien";
import PageNotFound from "./pages/PageNotFound";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary"; 

function App() {
  const [images, setImages] = useState([]); 

  return (
    <>
    <div className="main">
      
      <Nav />
      <ErrorBoundary>
        <Switch>

        <Route path="/" exact>
            < Home images={images} setImages={setImages}/>
          </Route>

          <Route path="/projects" exact>
            < Projects />
          </Route>

          <Route path="/search" exact>
            < Search />
          </Route>

          <Route path="/images" >
            < Images />
          </Route>

          <Route path="/cosplay" exact>
            < Cosplay images={images} setImages={setImages}/>
          </Route>

          <Route path="/portraits" exact>
            < Portraits images={images} setImages={setImages}/>          
          </Route>

          <Route path="/landscape" exact>
            < Landscape images={images} setImages={setImages}/>          
          </Route>

          <Route path="/clearlyguilty">
            <ClearlyGuilty images={images} setImages={setImages}/>
          </Route>

          <Route path="/valkyriebritannia">
            <ValkyrieBritannia images={images} setImages={setImages}/>
          </Route>

          <Route path="/blackzone">
            <BlackZone images={images} setImages={setImages}/>
          </Route>

          <Route path="/FancyJen">
            <FancyJen images={images} setImages={setImages}/>
          </Route>       

          <Route path="/Julien">
            <Julien images={images} setImages={setImages}/>
          </Route>      

          <Route path="/itable" exact>
            < ITable images={images} setImages={setImages}/>            
          </Route>

          <Route path="/retropie" exact>
            < Retropie images={images} setImages={setImages}/>            
          </Route>

          <Route path="/ledgoggles1" exact>
            < LEDgoggles1 images={images} setImages={setImages}/>            
          </Route>

          <Route path="/ledgoggles2" exact>
            < LEDgoggles2 images={images} setImages={setImages}/>            
          </Route>

          <Route path="/bluenes1" exact>
            < BlueNES1 images={images} setImages={setImages}/>            
          </Route>

          <Route path="/bluenes2" exact>
            < BlueNES2 images={images} setImages={setImages}/>            
          </Route>

          <Route path="/tesseractcase" exact>
            < TesseractCase images={images} setImages={setImages}/>            
          </Route>

          <Route path="/dnaarcade" exact>
            < DNAArcade images={images} setImages={setImages}/>            
          </Route>

          <Route path="/bb8" exact>
            < BB8 images={images} setImages={setImages}/>            
          </Route>

          <Route path="/vehicles" exact>
            < Vehicles images={images} setImages={setImages}/>          
          </Route>

          <Route path="/photoshop" exact>
            < Photoshop images={images} setImages={setImages}/>           
          </Route>

          <Route>
            < PageNotFound />
          </Route>

        </Switch>
      </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
