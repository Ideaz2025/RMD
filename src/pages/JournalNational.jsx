import React from "react";
import { nationalJournals } from "./data.js";
import "./data.css";
import "animate.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
const JournalList = () => {
  const pageTitle = "National Journals | Publication Summary";
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      </HelmetProvider>
      <div className="journal-container animate__animated animate__fadeIn">
        <h2 className="journal-title animate__animated animate__fadeInDown">National Journal Publications</h2>
        <ul className="journal-list">
          {nationalJournals.map((journal, idx) => (
            <li
              key={journal.id}
              className="journal-item animate__animated animate__fadeInUp"
              style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
            >
              <strong>{journal.authors}</strong><br />
              <em>{journal.title}</em><br />
              {journal.journal}, {journal.volume} ({journal.year})<br />
              {journal.pages && <>pp. {journal.pages}<br /></>}
              {journal.issn && <span>{journal.issn}<br /></span>}
              {journal.eissn && <span>{journal.eissn}<br /></span>}
              {journal.doi && <span>DOI: {journal.doi}<br /></span>}
              {journal.link && (
                <a
                  href={journal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link"
                >
                  View Journal
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JournalList;
