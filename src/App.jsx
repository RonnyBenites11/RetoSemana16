import React from 'react';
import Reviews from './components/Reviews';
import BreadBanners from './components/BannerPan';
import breadImage from './assets/img/tasteful-recipes.jpg';
import breadImage2 from './assets/img/tasty.jpg';
import { Section } from './components/Section';

import Footer from './components/Footer';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header />
      <Section sectionName="story" />
      <BreadBanners backgroundImage={breadImage} text="Always" subtext="F R E S H" />
      <Section sectionName="menu" />
      <BreadBanners backgroundImage={breadImage2} text="Everything" subtext="T A S T Y" />
      <Section sectionName="delight" />
      <Reviews />

      <Footer />
    </div>
  );
}

export default App;
