import React from 'react';
import './Certifications.css';

import { Certification } from '../types';

// Certificate images
import pythonessentialsImg from '../images/pythonessentials.png';
import cloudImg from '../images/Cloud Computing.png';
import sqlImg from '../images/sql_certificate.png';
import couresera from '../images/coursera.png';
// Add your images...



const certifications: Certification[] = [
  {
    title: "Python Essentials",
    issuer: "Vityarthi",
    issuedDate: "2023",
    link: "#", // add actual link if available
   
    image: pythonessentialsImg
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    issuedDate: "2024",
    link: "#",  // add actual link if available
    
    image: cloudImg
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    issuedDate: "2023",
    link: "#",  // add actual link if available
    
    image: couresera
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    issuedDate: "2025",
    link: "#",  // add actual link if available
    
    image: sqlImg
  },
  // Add more as required, e.g. Bits and Bytes, SQL, etc.
];

const Certifications: React.FC = () => (
  <div className="certifications-container">
    <div className="certifications-title">Certifications</div>
    <div className="certifications-grid">
      {certifications.map((cert, index) => (
        <a
          href={cert.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="certification-card"
          style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
        >
          <div className="certification-content">
            <div className="certification-image-section">
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title + " Certificate"}
                  className="certificate-img"
                />
              )}
            </div>
            
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            {cert.issuedDate && (
              <span className="issued-date">Issued {cert.issuedDate}</span>
            )}
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Certifications;
