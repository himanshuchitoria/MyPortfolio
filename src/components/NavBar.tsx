import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import i18n from '../i18n'; 
import './Navbar.css';
import netflixLogo from '../images/logo-2.png';
import blueImage from '../images/blue.jpg';
import SupportChat from './supportchat';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Language toggle handler
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={netflixLogo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">{t('navbar.home')}</Link></li>
            <li><Link to="/work-experience">{t('navbar.professional')}</Link></li>
            <li><Link to="/skills">{t('navbar.skills')}</Link></li>
            <li><Link to="/projects">{t('navbar.projects')}</Link></li>
            <li><Link to="/contact-me">{t('navbar.hireMe')}</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <button
            onClick={toggleLanguage}
            style={{ marginRight: '20px', padding: '5px 10px', cursor: 'pointer' }}
            aria-label={t('navbar.toggleLanguageAria')}
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>

          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profileImage} alt={t('navbar.profileAlt')} className="profile-icon" onClick={() => { navigate('/browse') }} />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> {t('navbar.home')}</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> {t('navbar.professional')}</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> {t('navbar.skills')}</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> {t('navbar.projects')}</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> {t('navbar.hireMe')}</Link></li>
        </ul>
      </div>
      <SupportChat />

    </>
  );
};

export default Navbar;
