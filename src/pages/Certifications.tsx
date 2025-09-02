import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';

// Icon mapping for issuers/platforms
const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

// Local static certifications data (edit with your own certifications!)
const certifications: Certification[] = [
  {
    title: "React Developer Certification",
    issuer: "Udemy",
    issuedDate: "March 2024",
    link: "https://www.udemy.com/certificate/react",
    iconName: "udemy",
  },
  {
    title: "Backend Development with Node.js",
    issuer: "Coursera",
    issuedDate: "June 2023",
    link: "https://www.coursera.org/certificate/nodejs",
    iconName: "coursera",
  },
  {
    title: "IEEE Technical Paper Winner",
    issuer: "IEEE",
    issuedDate: "December 2022",
    link: "https://www.ieee.org/paper",
    iconName: "ieee",
  },
  // Add more as needed
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
            <div className="certification-icon">
              {iconData[cert.iconName] || <FaUniversity />}
            </div>
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
