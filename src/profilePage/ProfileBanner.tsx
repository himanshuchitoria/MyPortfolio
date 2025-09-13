import React, { useState, useEffect } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: { url: "/images/banner.jpg" },
  headline: "My Personal portfolio",
  resumeLink: { url: "https://drive.google.com/file/d/1Ss6KghUmLk426W473T2SwwSPU6AXcy-l/view?usp=drive_link" },
  linkedinLink: "https://linkedin.com/in/himanshuchitoria",
  profileSummary: "Welcome to my portfolio. Here are my featured projects.",
};

const MOBILE_BREAKPOINT = 850;

const ProfileBanner: React.FC = () => {
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  useEffect(() => {
    // Show only if the flag is not set AND we're on mobile
    const dismissed = localStorage.getItem('mobileOverlayDismissed');
    if (!dismissed && window.innerWidth < MOBILE_BREAKPOINT) {
      setShowMobileOverlay(true);
    }
  }, []);

  useEffect(() => {
    // Prevent body scroll while overlay is shown
    if (showMobileOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
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
          backgroundPosition: 'center'
        }}
      />
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
      {showMobileOverlay && (
        <div className="mobilevs">
          <button
            className="mobilevs-close"
            onClick={dismissOverlay}
            aria-label="Close overlay"
          >
            ×
          </button>
          <div className="mobilevs-content">
            <p>Use desktop view / laptop for better view experience</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileBanner;
