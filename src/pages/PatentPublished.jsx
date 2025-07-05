import React from "react";
import "./data.css";
import "animate.css";
import patent from "./pdfs/Patent.pdf"; // Adjust the path as necessary

const PatentList = () => {
  const patentPdf = patent;
  const patents = [
    {
      title:
        "LOW COST, PASSIVE DATA COLLECTION AND CARE TAKER CONTACT DEVICE FOR INDIVIDUALS WITH MEMORY ISSUES",
      date: "16-Mar-2020",
      number: "25983 / 202041011188",
      description:
        "This invention relates to using QR codes for obtaining the contact information of a person and automatically sending alert messages to pre-established care takers. QR codes are printed on jewelry items like pendants, bracelets, lockets etc.",
    },
    {
      title: "THE SMART GARBAGE MANAGEMENT SYSTEM",
      date: "12-Feb-2021",
      number: "202121002140",
      description:
        "An IoT-based system comprising authentication, monitoring, control, and notification modules for hygienic garbage management. It uses sensors, RFID, and automated controls to optimize bin usage and alert nodal agencies.",
    },
    {
      title:
        "ARTIFICIAL INTELLIGENCE BASED APPROACH TO ANALYSE THE PROS AND CONS OF MINI CHANNEL BASED SOLAR COLLECTORS FOR EFFECTIVE UTILIZATION OF SOLAR ENERGY",
      date: "18-Nov-2022",
      number: "202241058952 A",
      description:
        "This invention uses AI techniques to evaluate and improve the performance of mini-channel-based solar collectors for more efficient solar energy utilization.",
    },
    {
      title:
        "Driver Somnolence & Lethargy Detection Model based on Eyes & Facial Movement using OpenCV Library",
      date: "28/03/2025",
      number: "202541023106 A",
      description:
        "A model for detecting driver drowsiness and lethargy by analyzing eye and facial movements using the OpenCV library.",
    },
  ];

  return (
    <div className="patent-container animate__animated animate__fadeIn">
      <h2 className="patent-title animate__animated animate__fadeInDown">
        Published Patents
      </h2>
      <div className="patent-list">
        {patents.map((patent, idx) => (
          <div
            key={idx}
            className="patent-item animate__animated animate__fadeInUp"
            style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
          >
            <h3 className="patent-item-title">{patent.title}</h3>
            <p className="patent-meta">
              <strong>Published on:</strong> {patent.date} |{" "}
              <strong>Patent No:</strong> {patent.number}
            </p>
            <p className="patent-desc">{patent.description}</p>
          </div>
        ))}
      
      </div>
        <div style={{ marginTop: "0.5rem",display: "flex", justifyContent: "center" }}>
          <button
            className="pdf-btn"
            onClick={() =>
              window.open(
                patentPdf,
                "pdfPopup",
                "width=900,height=600,scrollbars=yes,resizable=yes"
              )
            }
            type="button"
          >
            📄 View PDF
          </button>
        </div>
    </div>
  );
};

export default PatentList;
