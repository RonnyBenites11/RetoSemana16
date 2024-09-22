import React from 'react';
import Reviews from './components/Reviews';
import BreadBanners from './components/BannerPan';
import breadImage from './assets/img/tasteful-recipes.jpg'; 
import breadImage2 from './assets/img/tasty.jpg'; 

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <BreadBanners backgroundImage={breadImage} 
        text="Always" 
        subtext="FRESH"/>
        <BreadBanners backgroundImage={breadImage2} 
        text="Erityng" 
        subtext="TASTY"/>
      </div>
      <Reviews/>
     
      <Footer />
    </div>
  );
}

export default App;
