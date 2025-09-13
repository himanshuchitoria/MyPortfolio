import React,{useEffect} from 'react';
import './Certifications.css';

import { Certification } from '../types';

// Certificate images
import pythonessentialsImg from '../images/pythonessentials.png';
import cloudImg from '../images/Cloud Computing.png';
import sqlImg from '../images/sql_certificate.png';
import couresera from '../images/coursera.png';
import data from '../images/datafundamentals.jpg';




const certifications: Certification[] = [
  {
    title: "Python Essentials",
    issuer: "Vityarthi",
    issuedDate: "2023",
    link: "https://vityarthi.com/certificate_validation", // add actual link if available
   
    image: pythonessentialsImg
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    issuedDate: "2024",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS17S45760185730506740",  // add actual link if available
    
    image: cloudImg
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    issuedDate: "2023",
    link: "https://www.coursera.org/account/accomplishments/records/3ALVY3NKCCXV",  // add actual link if available
    
    image: couresera
  },
  {
    title: "SQL",
    issuer: "Scaler Academy",
    issuedDate: "2025",
    link: "#",  // add actual link if available
    
    image: sqlImg
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    issuedDate: "2025",
    link: "https://www.credly.com/badges/1dd555a9-e9a4-48df-81bf-c096a916a9d6/linked_in_profile",  // add actual link if available
    
    image: data
  },
  // Add more as required, e.g. Bits and Bytes, SQL, etc.
];

const Certifications: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
  
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
};

export default Certifications;
