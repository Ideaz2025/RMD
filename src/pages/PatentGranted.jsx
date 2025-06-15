import React, { useState } from 'react';
import './data.css';
import 'animate.css';
import FsLightbox from 'fslightbox-react';
import PatentImage from '../assets/Routes/patent.js';

const Patentgranted = () => {


  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div className="awards-container animate__animated animate__fadeIn">
      <h2 className="awards-title animate__animated animate__fadeInDown">PATENT GRANTED</h2>
     
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={PatentImage}
        slide={lightboxController.slide}
        className="fslightbox-source"
      />
      <div className="certificates-wrapper">
        {PatentImage
          .reduce((rows, src, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(
              <div className="col certificates-ratio gap-image animate__animated animate__zoomIn" style={{ animationDelay: `${0.2 + index * 0.07}s` }} key={src}>
                <img
                  className="shadow"
                  width="300px"
                  height="100%"
                  loading="lazy"
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  onClick={() => openLightboxOnSlide(index + 1)}
                />
              </div>
            );
            return rows;
          }, [])
          .map((row, index) => (
            <div className="row my-4" key={index}>
              {row}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Patentgranted;