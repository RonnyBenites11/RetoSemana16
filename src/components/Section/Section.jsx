import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({ sectionName }) => {
  const containerInfo = {
    story: {
      title: 'Discover',
      subtittle: 'our story',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi ut neque maiores, saepe et recusandae quae laudantium velit odio.',
      link: 'Learn more',
      src: './src/components/img/story-img.jpg',
    },
    menu: {
      title: 'Explore',
      subtittle: 'menu',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi ut neque maiores, saepe et recusandae quae laudantium velit odio.',
      link: 'See full menu',
      src: {
        img1: './src/components/img/square-1.jpg',
        img2: './src/assets/img/square-2.jpg',
        img3: './src/assets/img/square-3.jpg',
        img4: './src/assets/img/square-4.jpg',
      },
    },
    delight: {
      title: "Baken's",
      subtittle: 'Delight',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi ut neque maiores, saepe et recusandae quae laudantium velit odio.',
      link: 'Make a reservation',
      src: {
        img1: '/src/assets/img/bakers-delight-1.jpg',
        img2: '/src/assets/img/bakers-delight-2.jpg',
      },
    },
  };

  const info = containerInfo[sectionName];
  console.log(info);

  return (
    <div className="container-width bakery-container">
      <div className={`bakery-info bakery-info-${sectionName}`}>
        <h2 className="bakery-title">
          <span>{info.title}</span> {info.subtittle}
        </h2>
        <p className="bakery-txt">{info.texto}</p>
        <span className="bakery-link">{info.link}</span>
      </div>
      <div className={`bakery-img bakery-img-${sectionName}`}>
        {typeof info.src === 'string' ? (
          <img src={info.src} alt="imagen" />
        ) : (
          Object.values(info.src).map((src, index) => (
            <img key={index} src={src} alt={`imagen ${index + 1}`} />
          ))
        )}
      </div>
    </div>
  );
};

// Validación de las propiedades
Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default Section;