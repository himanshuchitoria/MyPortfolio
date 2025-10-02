import React from 'react';
import { useTranslation } from 'react-i18next';
import './Music.css';

// Languages Known Section
const languagesKnownData = [
  { nameKey: "music.languages.hindi.name", levelKey: "music.languages.hindi.level", color: "#e50914" },
  { nameKey: "music.languages.english.name", levelKey: "music.languages.english.level", color: "#ffe87c" },
  { nameKey: "music.languages.japanese.name", levelKey: "music.languages.japanese.level", color: "#5cdb95" }
];

const Music: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="music-page">
      <div className="quote">
        {/* You can add quotes text here if needed */}
      </div>

      <div className="language-section">
        <h3>{t('music.languagesKnownAndInterests')}</h3>
        <div className="languages">
          {languagesKnownData.map((lang, index) => (
            <div
              key={index}
              className="language-card"
              style={{ borderColor: lang.color, animationDelay: `${index * 0.16}s` }}
            >
              <span className="language-name" style={{ color: lang.color }}>
                {t(lang.nameKey)}
              </span>
              <span className="language-level">{t(lang.levelKey)}</span>
              {t(lang.nameKey) === 'Japanese' && (
                <span className="language-badge">Learning Now 🇯🇵</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
