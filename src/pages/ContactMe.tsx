import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

// Local static contact data
const userData: IContactMe = {
  name: "Himanshu Chitoria",
  title: "Software Engineer",
  summary: "Passionate about building scalable web apps and sharing knowledge.",
  companyUniversity: "VIT Bhopal University",
  linkedinLink: "https://linkedin.com/in/himanshuchitoria",
  email: "himanshuchitoria88@gmail.com",
  phoneNumber: "+91-99999-99999",
  profilePicture: {
    url: "https://www.bing.com/images/search?q=image&id=BC6470C60B7A8615DA7155B539C4A122275DF649&FORM=IQFRBA"
  }
};

const ContactMe: React.FC = () => (
  <div className="contact-container">
    <div className="linkedin-badge-custom">
      <img src={userData.profilePicture.url} alt="Sumanth Samala" className="badge-avatar" />
      <div className="badge-content">
        <h3 className="badge-name">{userData.name}</h3>
        <p className="badge-title">{userData.title}</p>
        <p className="badge-description">{userData.summary}</p>
        <p className="badge-company">{userData.companyUniversity}</p>
        <a
          href={userData.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <FaLinkedin className="linkedin-icon" /> View Profile
        </a>
      </div>
    </div>
    <div className="contact-header">
      <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
    </div>
    <div className="contact-details">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href={`mailto:${userData.email}`} className="contact-link">
          {userData.email}
        </a>
      </div>
      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <a href={`tel:${userData.phoneNumber}`} className="contact-link">
          {userData.phoneNumber}
        </a>
      </div>
      <div className="contact-fun">
        <p>Or catch up over a coffee ☕</p>
        <FaCoffee className="coffee-icon" />
      </div>
    </div>
  </div>
);

export default ContactMe;
