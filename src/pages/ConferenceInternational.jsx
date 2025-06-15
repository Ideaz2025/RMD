import React from 'react';
import { papers } from './data.js';
import './data.css';
import 'animate.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Publications = () => {
  return (
    <div className="conference-intl-container animate__animated animate__fadeIn">
      <HelmetProvider>
        <Helmet>
          <title>Conference Publications | Publication Summary</title>
        </Helmet>
      </HelmetProvider>
      <h2 className="conference-intl-title animate__animated animate__fadeInDown">Research Publications</h2>
      <ul className="conference-intl-list">
        {papers.map((paper, idx) => (
          <li
            key={idx}
            className="conference-intl-item animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
          >
            <strong>{paper.title}</strong><br />
            <em>{paper.authors}</em> ({paper.year})<br />
            <span>{paper.conference}</span><br />
            {paper.date && <span><strong>Date:</strong> {paper.date}<br /></span>}
            {paper.location && <span><strong>Location:</strong> {paper.location}<br /></span>}
            {paper.organizer && <span><strong>Organized by:</strong> {paper.organizer}<br /></span>}
            {paper.note && <span><strong>Note:</strong> {paper.note}<br /></span>}
            {paper.details && <span><strong>Details:</strong> {paper.details}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
