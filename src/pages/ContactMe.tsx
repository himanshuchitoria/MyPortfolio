import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import profile from '../images/Pic.jpg';

const userData: IContactMe = {
  name: "Himanshu Chitoria",
  title: "Software Engineer",
  summary: "Building imaginative solutions with code and coffee.",
  companyUniversity: "VIT Bhopal University",
  linkedinLink: "https://linkedin.com/in/himanshuchitoria",
  email: "himanshuchitoria88@gmail.com",
  phoneNumber: "+91-9896380935",
  profilePicture: {
    url: profile,
  }
};

const ContactMe: React.FC = () => (
  <div className="contact-bg">
    <div className="contact-glasscard">
      <div className="badge-glass">
        <img src={userData.profilePicture.url} alt="Himanshu Chitoria" className="badge-avatar" />
        <div className="badge-content">
          <div className="badge-glow" />
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title neon-red">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link neon-btn"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>Let’s create something remarkable together.<br />
          <span /> Open to collaboration. <span  />
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link futuristic-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link futuristic-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contactfun">
          <p>Or let's connect over a coffee</p>
          
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  </div>
);

export default ContactMe;
