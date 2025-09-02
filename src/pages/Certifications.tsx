import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';

// Certificate images
import pythonessentialsImg from '../images/pythonessentials.png';
import cloudImg from '../images/Cloud Computing.png';
import sqlImg from '../images/sql_certificate.png';
// Add your images...
// import bitsAndBytesImg from '../images/bitsandbytes.png';

const iconData: { [key: string]: JSX.Element } = {
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

// Based on your CV and cert images
const certifications: Certification[] = [
  {
    title: "Python Essentials",
    issuer: "Vityarthi",
    issuedDate: "2023",
    link: "#", // add actual link if available
    iconName: "university",
    image: pythonessentialsImg
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    issuedDate: "2024",
    link: "#",  // add actual link if available
    iconName: "university",
    image: cloudImg
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    issuedDate: "2025",
    link: "#",  // add actual link if available
    iconName: "coursera",
    image: sqlImg
  },
  // Add more as required, e.g. Bits and Bytes, SQL, etc.
];

const Certifications: React.FC = () => (
  <div className="certifications-container">
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
              {/* Show certificate image */}
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title + " Certificate"}
                  className="certificate-img"
                  style={{
                    width: "210px",
                    height: "140px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    marginBottom: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
                  }}
                />
              )}
            </div>
            <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            {cert.issuedDate && (
              <span className="issued-date">Issued {cert.issuedDate}</span>
            )}
          </div>
          <div className="certification-link animated-icon">
            <FaExternalLinkAlt />
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Certifications;
