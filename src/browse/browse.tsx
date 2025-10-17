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
      backgroundGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHhzdnJuM3E5bmJnY3k1Z3Y2N2hkOXNjMHpsMTIwcW9xZGd4bXBkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GghGKaZ8JeHJx0apQC/giphy.gif"
    },
    {
      name: "stalker",
      image: redImage,
      backgroundGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWw5Z3FyejQzN3Z4ZWRoaGw4dzc4cjFwODJ2OTlnMnMyNHpoZjlqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GCjIE9C9Eb9V6/giphy.gif"
    },
    {
      name: "adventurer",
      image: yellowImage,
      backgroundGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExemw1cDllcm50cnhlc21wbGpmY3ZqNzdpenhzbW5rN2dwZDluNWg3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/282FVV3gOTojMwgcDm/giphy.gif"
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
