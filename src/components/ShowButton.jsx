import React from "react";
import randomArr from "../services/randomArr";
import arr from "../utils/phrases.json";
import imagesArr from "../utils/images.json";

const ShowButton = ({ setRandomPhrase, setImage }) => {
  const handleClick = () => {
    const quote = randomArr(arr);
    setRandomPhrase(quote);
    const photo = randomArr(imagesArr);
    setImage(photo);
  };
  return (
    <button onClick={handleClick} className="app_btn">
      Ver otro
    </button>
  );
};

export default ShowButton;
