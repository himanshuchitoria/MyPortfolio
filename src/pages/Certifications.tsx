import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Certifications.css';

import pythonessentialsImg from '../images/pythonessentials.png';
import cloudImg from '../images/Cloud Computing.png';
import sqlImg from '../images/sql_certificate.png';
import coursera from '../images/coursera.png';
import data from '../images/datafundamentals.jpg';

const imageMap: { [key: string]: string } = {
  python_essentials: pythonessentialsImg,
  cloud_computing: cloudImg,
  bits_bytes_networking: coursera,
  sql: sqlImg,
  data_fundamentals: data,

  
};



const Certifications: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  // Fetch certifications array from translation JSON
  const certificationsRaw = t('certifications.items', { returnObjects: true });
  const certifications = Array.isArray(certificationsRaw) ? certificationsRaw : [];

  return (
    <div className="certifications-container">
      <div className="certifications-title">{t('certifications.title')}</div>
      <div className="certifications-grid">
        {certifications.map((cert: any, index: number) => (
          <a
            href={cert.link || '#'}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-image-section">
                {cert.key && imageMap[cert.key] && (
                  <img
                    src={imageMap[cert.key]}
                    alt={cert.title + " Certificate"}
                    className="certificate-img"
                  />
                )}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">{t('certifications.issued')} {cert.issuedDate}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
