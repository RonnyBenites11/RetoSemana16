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
      src: 'https://i.ibb.co/pjmm5H2/story-img.jpg',
    },
    menu: {
      title: 'Explore',
      subtittle: 'menu',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi ut neque maiores, saepe et recusandae quae laudantium velit odio.',
      link: 'See full menu',
      src: {
        img1: 'https://i.ibb.co/yggZWKb/square-1.jpg',
        img2: 'https://i.ibb.co/VvkV6pY/square-2.jpg',
        img3: 'https://i.ibb.co/28M4g9X/about-img-2.jpg',
        img4: 'https://i.ibb.co/0J4j5WY/square-4.jpg',
      },
    },
    delight: {
      title: "Baken's",
      subtittle: 'Delight',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi ut neque maiores, saepe et recusandae quae laudantium velit odio.',
      link: 'Make a reservation',
      src: {
        img1: 'https://i.ibb.co/sJdtbcy/bakers-delight-1.jpg',
        img2: 'https://i.ibb.co/R34dgyx/bakers-delight-2.jpg',
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