import React from 'react';
import Reviews from './components/Reviews';
import BreadBanners from './components/BannerPan';
import breadImage from './assets/img/tasteful-recipes.jpg';
import breadImage2 from './assets/img/tasty.jpg';
import { Section } from 'lucide-react';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <Section sectionName="story" />
      <BreadBanners backgroundImage={breadImage} text="Always" subtext="FRESH" />
      <Section sectionName="menu" />
      <BreadBanners backgroundImage={breadImage2} text="Erityng" subtext="TASTY" />
      <Section sectionName="delight" />
      <Reviews />

      <Footer />
    </div>
  );
}

export default App;
