import React from "react";
import conferencePapers from "./data.js";
import "./data.css";
import "animate.css";

const ConferenceList = () => {
  // Find the first paper with a PDF (or set your own logic)

  return (
    <div className="conference-container animate__animated animate__fadeIn">
      <h2 className="conference-title animate__animated animate__fadeInDown">
        National Conference Papers
      </h2>
      <ul className="conference-list">
        {conferencePapers.map((paper, idx) => (
          <li
            key={paper.id}
            className="conference-item animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
          >
            <strong>{paper.authors}</strong>
            <br />
            <em>{paper.title}</em>
            <br />
            {paper.event}, {paper.date}
            <br />
            {paper.location}
            <br />
            {paper.isbn && <span>{paper.isbn}</span>}
            <br />
            {paper.copyright && <span>© {paper.copyright}</span>}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ConferenceList;
