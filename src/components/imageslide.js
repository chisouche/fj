import React, { useState, useEffect } from 'react';
import "../styles/css/imageCarousel.css";
import photo_one from '../assets/images/photoslide1.svg';
import photo_two from '../assets/images/photosilde2.svg'; // Corrected typo
import photo_three from '../assets/images/photoslide3.svg'; // Corrected typo
import photo_four from '../assets/images/photoslide4.svg';
import photo_five from '../assets/images/photoslide5.svg'


const ImageSlide = () => {
const [activeIndex, setActiveIndex] = useState(0);
const totalImages = 5; // Total number of images (update as needed)

useEffect(() => {
    const interval = setInterval(() => {
    // Calculate the next index cyclically
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change the interval duration as needed

    return () => clearInterval(interval);
}, []);

return (
    <div className="container">
    {/* Input radios for each slide */}
    {[...Array(totalImages)].map((_, index) => (
        <input key={`item-${index + 1}`} type="radio" name="slider" id={`item-${index + 1}`} checked={activeIndex === index} />
    ))}
    <div className="cards">
        {/* Labels for each image */}
        <label className="card" htmlFor="item-1" id="song-1">
        <img src={photo_one} alt="song" />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
        <img src={photo_two} alt="song" />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
        <img src={photo_three} alt="song" />
        </label>
        <label className="card" htmlFor="item-4" id="song-4"> 
              <img src={photo_four} alt="song" /> 
        </label>
        <label className="card" htmlFor="item-5" id="song-5">
        <img src={photo_five} alt="song" /> 
        </label>
    </div>


    </div>
    );
  };
  
  export default ImageSlide;





//  Image Carousel slide Credit: CodePen Home
// Playlist Carousel - css only
// Aybüke Ceylan Öncü  https://codepen.io/aybukeceylan/pen/RwrRPoO