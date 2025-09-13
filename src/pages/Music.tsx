import React from 'react';
import './Music.css';




// Languages Known Section
const languagesKnown = [
  { name: "Hindi", level: "Native", color: "#e50914" }, // Netflix Red
  { name: "English", level: "Professional", color: "#ffe87c" }, // Netflix Gold
  { name: "Japanese", level: "Interested / Currently Learning", color: "#5cdb95" }, // Green Accent
];

const Music: React.FC = () => (
  <div className="music-page">
    <div className="quote">
     
    </div>

    <div className="language-section">
      <h3>Languages Known & Interests</h3>
      <div className="languages">
        {languagesKnown.map((lang, index) => (
          <div
            key={index}
            className="language-card"
            style={{ borderColor: lang.color, animationDelay: `${index * 0.16}s` }}
          >
            <span className="language-name" style={{ color: lang.color }}>{lang.name}</span>
            <span className="language-level">{lang.level}</span>
            {lang.name === 'Japanese' && (
              <span className="language-badge">Learning Now 🇯🇵</span>
            )}
          </div>
        ))}
      </div>
    </div>

    

    
  </div>
);

export default Music;
