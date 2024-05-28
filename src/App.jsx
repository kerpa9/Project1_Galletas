import { useState } from "react";
import "./App.css";
import ShowButton from "./components/ShowButton";
import ShowPhrase from "./components/ShowPhrase";
import randomArr from "./services/randomArr";
import arr from "./utils/phrases.json";
import imagesArr from "./utils/images.json";

function App() {
  const quote = randomArr(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr);
  const [image, setImage] = useState(photo);

  const appStyle = {
    backgroundImage: `url('../fortuna-2/fondo${image}.jpg')`,
  };
  return (
    <div className="app" style={appStyle}>
      <h1 className="app_title">GALLETAS DE LA FORTUNA</h1>
      <ShowPhrase randomPhrase={randomPhrase} />
      <ShowButton setRandomPhrase={setRandomPhrase} setImage={setImage} />
    </div>
  );
}

export default App;
