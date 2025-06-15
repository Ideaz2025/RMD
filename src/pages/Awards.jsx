import React, { useState } from 'react';
import './data.css';
import 'animate.css';
import FsLightbox from 'fslightbox-react';
import certificateImages from '../assets/Routes/AllCertificate';

const AwardsSection = () => {
  const awards = [
    {
      title: 'Excellence in Research',
      organization: 'KPS Awards',
      date: 'June 5th, 2022',
      location: 'Tamil Nadu, India',
    },
    {
      title: 'Best Researcher Award',
      organization: 'IJIEMR – Elsevier SSRN Research Awards',
      date: 'September 2022',
      location: 'India',
      issn: 'ISSN.NO-2456-5083',
    },
  ];

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
      <h2 className="awards-title animate__animated animate__fadeInDown">Awards & Recognitions</h2>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index} className="awards-item animate__animated animate__fadeInUp" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <strong>{award.title}</strong> – {award.organization}<br />
            <em>{award.date}, {award.location}</em>
            {award.issn && <div>ISSN: {award.issn}</div>}
          </li>
        ))}
      </ul>
      <h4 className="animate__animated animate__fadeInLeft">Certificates</h4>
      <span>─────</span>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={certificateImages}
        slide={lightboxController.slide}
      />
      <div className="certificates-wrapper">
        {certificateImages
          .reduce((rows, src, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(
              <div className="col certificates-ratio gap-image animate__animated animate__zoomIn" style={{ animationDelay: `${0.2 + index * 0.07}s` }} key={src}>
                <img
                  className="shadow"
                  width="400px"
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

export default AwardsSection;
