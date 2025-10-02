import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: { url: "/images/banner.jpg" },
  headline: "profileBanner.headline",
  resumeLink: { url: "https://drive.google.com/file/d/1OhG5L7EYo-R6BoMZQjq4mXcEmqA5pIZ5/view?usp=sharing" },
  linkedinLink: "https://linkedin.com/in/himanshuchitoria",
  profileSummary: "profileBanner.profileSummary",
};

const MOBILE_BREAKPOINT = 850;

const ProfileBanner: React.FC = () => {
  const { t } = useTranslation();
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('mobileOverlayDismissed');
    if (!dismissed && window.innerWidth < MOBILE_BREAKPOINT) {
      setShowMobileOverlay(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileOverlay ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileOverlay]);

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  const dismissOverlay = () => {
    setShowMobileOverlay(false);
    localStorage.setItem('mobileOverlayDismissed', 'true');
  };

  return (
    <div className="profile-banner">
      <div
        className="banner-background"
        style={{
          backgroundImage: `url('${bannerData.backgroundImage.url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{t(bannerData.headline)}</h1>
        <p className="banner-description">{t(bannerData.profileSummary)}</p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label={t('profileBanner.buttons.resume')} />
          <MoreInfoButton onClick={handleLinkedinClick} label={t('profileBanner.buttons.linkedin')} />
        </div>
      </div>
      {showMobileOverlay && (
        <div className="mobilevs">
          <button className="mobilevs-close" onClick={dismissOverlay} aria-label={t('profileBanner.overlayClose')}>
            ×
          </button>
          <div className="mobilevs-content">
            <p>{t('profileBanner.overlayMessage')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileBanner;
