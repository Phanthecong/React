import React, { useState } from "react";
import './ColorBox.scss';
const getRandomColor = () => {
  const ColorList = ['deeppink', 'yellow', 'black', 'blue', 'red'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return ColorList[randomIndex];
}
const ColorBox = () => {
  
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'red';
    return initColor;
  });
  function handleColor() {
    //get random color -> color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }
  return (
    <div className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleColor}
    >
      Change Colorbox 
    </div>
  )
}


ColorBox.propTypes = {

};

export default ColorBox;