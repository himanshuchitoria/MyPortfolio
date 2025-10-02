import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.jpg';
import greyImage from '../images/grey.jpg';
import redImage from '../images/red.jpg';
import yellowImage from '../images/yellow.jpg';
import './browse.css';

const Browse: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const profiles = [
    {
      name: "recruiter",
      image: blueImage,
      backgroundGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjA0ZXhic3BxYnFsN3VpdXNqbGRsZXliM2ZtdmR6OHd6czhqcmI3eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tcO763QEwhasuLXyp0/giphy.webp"
    },
    {
      name: "developer",
      image: greyImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
    },
    {
      name: "stalker",
      image: redImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif"
    },
    {
      name: "adventurer",
      image: yellowImage,
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif"
    },
  ];

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <button
        onClick={toggleLanguage}
        className="language-toggle"
        aria-label={t('browse.toggleLanguageAria')}
      >
        {language === 'en' ? '日本語' : 'English'}
      </button>
      <p className='who-is-watching'>{t('browse.whosWatching')}</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={t(`profiles.${profile.name}`)}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
