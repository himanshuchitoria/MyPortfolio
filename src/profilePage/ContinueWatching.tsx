import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Languages Known", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Extra Curricular", imgSrc: "https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  developer: [
    { title: "Languages Known", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "ExtraCurricular Activities", imgSrc: "https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "ExtraCurricular Activities", imgSrc: "https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://tse1.mm.bing.net/th/id/OIP.gGKiWB9X_DViK8Bvc_uccwHaDX?rs=1&pid=ImgDetMain&o=7&rm=3", link: "/contact-me" }
  ],
  adventurer: [
    { title: "Places Visited", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/placesvisited" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
    { title: "Socials", imgSrc: "https://th.bing.com/th/id/OIP.e13y_Fq1KhIhEMpk8p8vrAHaE8?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3", link: "/socials" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
