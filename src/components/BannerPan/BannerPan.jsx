import React from 'react';
import './BannerPan.css';
const BannerPan = ({ backgroundImage, text, subtext }) => {
    return (
      <div 
        className="banner" 
        style={{ 
          backgroundImage: `url(${backgroundImage})` 
        }}
      >
        <div className="banner-content">
          <h1>{text}</h1>
          {subtext && <p>{subtext}</p>}
        </div>
      </div>
    );
  };
  
  export default BannerPan;