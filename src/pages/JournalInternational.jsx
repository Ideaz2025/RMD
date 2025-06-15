import React from "react";
import internationalJournals from "./data.js";
import "./data.css";
import "animate.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const JournalInternational = () => {
  const pageTitle = "International Journals |Publication Summary";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      </HelmetProvider>

      <div className="journal-intl-container animate__animated animate__fadeIn">
        <h1 className="journal-intl-title animate__animated animate__fadeInDown">Publication Summary</h1>
        <section>
          <h2 className="journal-intl-section-title animate__animated animate__fadeInLeft">📙 International Journals</h2>
          <ul className="journal-intl-list">
            {internationalJournals.map((p, idx) => (
              <li
                key={p.id}
                className="journal-intl-item animate__animated animate__fadeInUp"
                style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
              >
                <strong>{p.authors}</strong><br />
                <em>{p.title}</em><br />
                {p.conference}, {p.date}, {p.location}
                <br />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default JournalInternational;
