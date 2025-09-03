import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

// Static banner data (update as needed)
const bannerData: ProfileBannerType = {
  backgroundImage: { url: "/images/banner.jpg" }, // Place banner.jpg in your public/images folder
  headline: "My Personal portfolio",
  resumeLink: { url: "https://drive.google.com/file/d/1Ss6KghUmLk426W473T2SwwSPU6AXcy-l/view?usp=drive_link" }, // Place resume.pdf in your public folder (or change path)
  linkedinLink: "https://linkedin.com/in/himanshuchitoria", // Update with your LinkedIn URL
  profileSummary: "Welcome to my portfolio. Here are my featured projects.",
};

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
