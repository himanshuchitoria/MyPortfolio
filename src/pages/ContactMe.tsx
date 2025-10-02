import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import profile from '../images/Pic.jpg';
import styled from 'styled-components';

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <div className="cards-container">
        <div className="card">
          <button className="mail" aria-label="Send email">
            <svg
              className="lucide lucide-mail"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect rx={2} y={4} x={2} height={16} width={20} />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </button>
          <div className="profile-pic">
            <img src={profile} alt={t('contactMe.name')} />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">{t('contactMe.name')}</span>
              <span className="about-me">{t('contactMe.summary')}</span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                {/* (Include your existing social icons SVGs here) */}
                <svg
                  viewBox="0 0 16 15.999"
                  height="15.999"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    transform="translate(6 598)"
                    d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                    data-name="Subtraction 4"
                    id="Subtraction_4"
                  />
                </svg>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
                <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </div>
              <button
                onClick={() => window.location.href = `mailto:${t('contactMe.email')}`}
                className="button"
                type="button"
              >
                {t('contactMe.contactMeButton')}
              </button>
            </div>
          </div>
        </div>

        <div className="other-details-card">
  <h2>{t('contactMe.collabHeader')}</h2>
  <p className="desc-main">
    <span className="highlight">"{t('contactMe.descmainhighlight')}"</span><br />
    {t('contactMe.descmain')}<br />
    <br />
    {t('contactMe.descmainlast')}
  </p>
  <hr className="divider"/>
  <div className="contact-section">
    <div className="detail-item">
      <FaEnvelope color="#e50914" size={22} />
      <span className="contact-label">Mail:</span>
      <a href={`mailto:${t('contactMe.email')}`}>{t('contactMe.email')}</a>
    </div>
    <div className="detail-item">
      <FaPhoneAlt color="#e50914" size={22} />
      <span className="contact-label">Phone:</span>
      <a href={`tel:${t('contactMe.phoneNumber')}`}>{t('contactMe.phoneNumber')}</a>
    </div>
    <div className="detail-item">
      <FaLinkedin color="#e50914" size={22} />
      <span className="contact-label">LinkedIn:</span>
      <a href={t('contactMe.linkedinLink')} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </a>
    </div>
  </div>
  
</div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards-container {
    display: flex;
    gap: 40px;
    
    margin-right: 100px;
    justify-content: center;
    padding: 40px;
    padding-top: 90px;
    padding-right: 50px;
    background: #141414;
    min-height: 70vh;
    
  }

  .card {
    width: 280px;
    margin-top: 400px;
    height: 280px;
    background: #141414;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: 0 70px 30px -50px rgba(229, 9, 20, 0.3);
    transition: all 0.5s ease-in-out;
    left:20%;
  }

  /* Existing card styles */
  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
  }

  .card .mail svg {
    stroke: #e50914;
    stroke-width: 3px;
  }

  .card .mail svg:hover {
    stroke: #f40612;
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
  }

  .card .profile-pic img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: 0 0;
    transition: all 0.5s ease-in-out 0s;
  }

  .card .profile-pic svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
    transform-origin: 45% 20%;
    transition: all 0.5s ease-in-out 0s;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #e50914;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: inset 0 5px 5px rgba(96, 75, 74, 0.19);
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: #f5f5f1;
    margin-top: 1rem;
    font-family: 'JetBrains Mono', monospace, 'Arial';
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container svg {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.13));
    transition: fill 0.3s ease;
  }

  .card .bottom .bottom-bottom .social-links-container svg:hover {
    fill: #f40612;
    transform: scale(1.2);
  }

  .card .bottom .bottom-bottom .button {
    background: white;
    color: #e50914;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(165, 132, 130, 0.13) 0px 5px 5px 0px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #b00b10;
    color: white;
  }

  .card:hover {
    border-top-left-radius: 55px;
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #e50914;
    box-shadow: 0 5px 5px rgba(229, 9, 20, 0.19);
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1);
    border-radius: 0;
  }

  .card:hover .profile-pic img {
    transform: scale(1.3);
    object-position: 10 25px;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .card:hover .profile-pic svg {
    transform: scale(2.5);
    transition: all 0.5s ease-in-out 0.5s;
  }

  .other-details-card {
  background-color: #212121;
  border-radius: 28px;
  padding-left: 0px;
  padding-bottom: 20px;
  padding-top: 20px;
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  height: 500px;
  width: 600px;
  margin-top: 115px;
  margin-left: 50px;
  border: 3px solid #f3f0f0ff;
  box-shadow: 0 0 25px 0 #e5091430;
}

.other-details-card h2 {
  font-size: 2.1rem;
  font-weight: 800;
  color: #423536ff;
  font-family: copperplate, 'Segoe UI', 'Arial', sans-serif;
  letter-spacing: 1px;
  text-align: left;
  background: #f3f0f0ff;
  margin-right: 30px;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  width: fit-content;
  padding: 3px 5px;
  text-shadow: 0 4px 16px #e509142a;
}

.desc-main {
  font-size: 1.12rem;
  color: #f3f0f0ff;
  line-height: 1.58;
  margin-left: 130px;
  padding-right: 10px;
  font-family: 'Segoe UI', 'Arial', sans-serif;
}

.highlight {
  color: #e50914;
  font-weight: 700;
  font-size: 1.18rem;
  letter-spacing: 0.4px;
  
}



.contact-section {
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  gap: 16px;
  margin-top: -30px;
  margin-left: 40px;
  background-color: #f3f0f0ff;
  border-bottom-left-radius: 12px;

}

.detail-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.08rem;
  margin-left: 100px;
}

.contact-label {
  color: #e50914;
  font-size: 0.98rem;
  font-weight: 700;
  margin-right: 7px;
  letter-spacing: 0.35px;
}

/* Links */
.other-details-card a {
  color: #423536ff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s ease, text-shadow 0.22s;
}

.other-details-card a:hover {
  text-decoration: underline;
  color: #b00b10;
  text-shadow: 0 2px 12px #e509142c;
}

/* Extra inspirational section */
.extra-section {
  margin-left: 100px;
  
  font-size: 1rem;
  color: #232323;
  line-height: 1.4;
}

.quote {
  color: #e50914;
  font-weight: bold;
  font-style: italic;
}

.extra-section ul {
  margin: 8px 0 0 18px;
  padding: 0;
  color: #e50914;
}
.extra-section ul li {
  margin: 2px 0;
  font-size: 0.99rem;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-weight: 500;
  list-style: disc inside;
}
@media screen and (max-width: 700px) {
  .cards-container {
    flex-direction: column !important;
    gap: 24px !important;
    justify-content: flex-start !important;
    align-items: center !important;
    padding: 18px 5vw 0 5vw !important;
    min-height: 80vh;
    margin-right: 0 !important;
    padding-right: 0 !important;
    padding-top: 200px !important;
    padding-top:250px !important;
    
  }

  .card {
    width: 50vw !important;
    
    height: 250px !important;
    margin: 0 auto !important;
    border-radius: 18px !important;
    margin-top: 26px !important;
    left: 0 !important;
    padding: 2px !important;
    
    margin-left: 190px !important;
  }
  .card .profile-pic {
    width: calc(100% - 6px) !important;
    height: calc(100% - 6px) !important;
    top: 3px !important;
    left: 3px !important;
    border-radius: 16px !important;
  }
  .card .bottom {
    border-radius: 15px !important;
    left: 3px !important;
    right: 3px !important;
    top: 79% !important;
    padding: 2px !important;
  }
  .card .bottom .content,
  .card .bottom .bottom-bottom {
    left: 1rem !important;
    right: 1rem !important;
    
   
  }
    .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
    margin-bottom:-7px !important;
  }

    .card .bottom .bottom-bottom .button {
    background: white;
    color: #e50914;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(165, 132, 130, 0.13) 0px 5px 5px 0px;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-bottom:-5px !important;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #b00b10;
    color: white;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem !important;
    color: white;
    font-weight: bold;
  }
  
  .card .bottom .content .about-me {
    font-size: 0.93rem !important;
  }

  .card:hover .profile-pic {
    width: 80px !important;
    height: 80px  !important;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #e50914;
    box-shadow: 0 5px 5px rgba(229, 9, 20, 0.19);
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

    

  .card:hover .profile-pic:hover {
    transform: scale(0.6);
    border-radius: 0;
  }
    .card:hover .bottom {
    top: 20% !important;
    border-radius: 80px 29px 29px 29px !important;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
    padding-top: 20px !important;
  }

  .card:hover .profile-pic img {
    transform: scale(1);
    object-position: 10 25px;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .card:hover .profile-pic svg {
    transform: scale(2.5);
    transition: all 0.5s ease-in-out 0.5s;
  }

  .other-details-card {
    width: 90vw !important;
    max-width: 340px !important;
    min-width: 0 !important;
    margin-top: -180px !important;
    margin-left: -10px !important;
    border-radius: 16px !important;
  
    box-sizing: border-box !important;
    font-size: 0.97rem !important;
    height: auto !important;
  }
  .other-details-card h2 {
    font-size: 1.19rem !important;
    margin-left: 95px !important;
    margin-bottom: 11px !important;
    text-align: center !important;
    padding: 2px 6px !important;
    width: fit-content !important;
    border-radius: 8px !important;
    z-index: 1 !important;
  }
  .desc-main {
    font-size: 0.92rem !important;
    margin-left: 0 !important;
    padding: 10px !important;
    text-align: center !important;
    margin-bottom:0px !important;
  }
  .contact-section {
    margin-left: 0 !important;
    padding: 9px 0 !important;
    border-radius:0 !important;
   
    padding:10px !important;
  }
  .detail-item {
    margin-left: 0 !important;
    font-size: 0.95rem !important;
    gap: 8px !important;
  }
  .contact-label {
    font-size: 0.96rem !important;
    margin-right: 4px !important;
  }
  
  }
}

`;

export default ContactMe;
