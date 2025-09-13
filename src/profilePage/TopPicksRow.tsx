import React, { useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
  FaRegThumbsUp,
  FaThumbsUp
} from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

type TopPick = {
  title: string;
  imgSrc: string;
  route: string;
  icon: React.ReactNode;
};

const topPicksConfig: Record<ProfileType, TopPick[]> = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://picsum.photos/seed/workpermit/250/200", icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://tse1.mm.bing.net/th/id/OIP.gGKiWB9X_DViK8Bvc_uccwHaDX?rs=1&pid=ImgDetMain&o=7&rm=3", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/achievements/250/200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Socials", imgSrc: "https://th.bing.com/th/id/OIP.e13y_Fq1KhIhEMpk8p8vrAHaE8?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3", route: "/socials", icon: <FaCertificate /> }
  ],
  adventurer: [
    { title: "Languages Known", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://picsum.photos/seed/books/250/200", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/medal/250/200", route: "/certifications", icon: <FaCertificate /> }
  ]
};

type LikesState = Record<string, { count: number; liked: boolean }>;

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  // Initialize likes with random counts between 0 and 99
  const initialLikes = useMemo<LikesState>(() => {
    const state: LikesState = {};
    topPicks.forEach((item) => {
      const randomCount = Math.floor(Math.random() * 10);
      state[item.route] = { count: randomCount, liked: false };
    });
    return state;
  }, [topPicks]);

  const [likes, setLikes] = useState<LikesState>(initialLikes);

  const toggleLike = useCallback((route: string) => {
    setLikes((prev) => {
      const current = prev[route] ?? { count: 0, liked: false };
      const nextLiked = !current.liked;
      return {
        ...prev,
        [route]: {
          liked: nextLiked,
          count: nextLiked ? current.count + 1 : Math.max(0, current.count - 1),
        },
      };
    });
  }, []);

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => {
          const liked = likes[pick.route]?.liked ?? false;
          const count = likes[pick.route]?.count ?? 0;

          return (
            <div
              key={pick.route}
              className="pick-card"
              onClick={() => navigate(pick.route)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>

              {/* Like icon only, no background, with zoom on hover */}
              <div
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); // prevent navigation on like click
                  toggleLike(pick.route);
                }}
                aria-pressed={liked}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleLike(pick.route);
                  }
                }}
                title={liked ? 'Unlike' : 'Like'}
              >
                {liked ? <FaThumbsUp className="like-icon" /> : <FaRegThumbsUp className="like-icon" />}
                <span className="like-count">{count}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPicksRow;
