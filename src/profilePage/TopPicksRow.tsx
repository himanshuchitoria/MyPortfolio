import React, { useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  FaThumbsUp,
} from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

type TopPick = {
  titleKey: string;
  imgSrc: string;
  route: string;
  icon: React.ReactNode;
};

const topPicksConfig: Record<ProfileType, TopPick[]> = {
  recruiter: [
    { titleKey: 'topPicks.workPermit', imgSrc: 'https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_640.jpg', icon: <FaPassport />, route: '/work-permit' },
    { titleKey: 'topPicks.skills', imgSrc: 'https://cdn.pixabay.com/photo/2019/07/12/18/48/code-4333398_640.jpg', icon: <FaCode />, route: '/skills' },
    { titleKey: 'topPicks.experience', imgSrc: 'https://cdn.pixabay.com/photo/2018/10/05/17/34/cv-3726428_1280.jpg', icon: <FaBriefcase />, route: '/work-experience' },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://cdn.pixabay.com/photo/2018/02/24/12/26/certificate-3177940_640.png', icon: <FaCertificate />, route: '/certifications' },
    { titleKey: 'topPicks.recommendations', imgSrc: 'https://cdn.pixabay.com/photo/2019/01/29/11/20/handshake-3962172_640.jpg', icon: <FaHandsHelping />, route: '/recommendations' },
    { titleKey: 'topPicks.projects', imgSrc: 'https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_1280.jpg', icon: <FaProjectDiagram />, route: '/projects' },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://cdn.pixabay.com/photo/2016/12/04/00/07/aerial-1880873_640.jpg', icon: <FaEnvelope />, route: '/contact-me' },
  ],
  developer: [
    { titleKey: 'topPicks.skills', imgSrc: 'https://picsum.photos/seed/coding/250/200', route: '/skills', icon: <FaCode /> },
    { titleKey: 'topPicks.projects', imgSrc: 'https://picsum.photos/seed/development/250/200', route: '/projects', icon: <FaProjectDiagram /> },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://picsum.photos/seed/badge/250/200', route: '/certifications', icon: <FaCertificate /> },
    { titleKey: 'topPicks.experience', imgSrc: 'https://picsum.photos/seed/work/250/200', route: '/work-experience', icon: <FaBriefcase /> },
    { titleKey: 'topPicks.recommendations', imgSrc: 'https://picsum.photos/seed/networking/250/200', route: '/recommendations', icon: <FaHandsHelping /> },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://picsum.photos/seed/connect/250/200', route: '/contact-me', icon: <FaEnvelope /> },
  ],
  stalker: [
    { titleKey: 'topPicks.recommendations', imgSrc: 'https://picsum.photos/seed/networking/250/200', route: '/recommendations', icon: <FaHandsHelping /> },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.gGKiWB9X_DViK8Bvc_uccwHaDX?rs=1&pid=ImgDetMain&o=7&rm=3', route: '/contact-me', icon: <FaEnvelope /> },
    { titleKey: 'topPicks.projects', imgSrc: 'https://picsum.photos/seed/planning/250/200', route: '/projects', icon: <FaProjectDiagram /> },
    { titleKey: 'topPicks.experience', imgSrc: 'https://picsum.photos/seed/resume/250/200', route: '/work-experience', icon: <FaBriefcase /> },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://picsum.photos/seed/achievements/250/200', route: '/certifications', icon: <FaCertificate /> },
    { titleKey: 'topPicks.socials', imgSrc: 'https://th.bing.com/th/id/OIP.e13y_Fq1KhIhEMpk8p8vrAHaE8?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3', route: '/socials', icon: <FaCertificate /> },
  ],
  adventurer: [
    { titleKey: 'topPicks.placesVisited', imgSrc: 'https://picsum.photos/id/1025/300/200', route: '/placesvisited', icon: <FaMusic /> },
    { titleKey: 'topPicks.moviesReviews', imgSrc: 'https://th.bing.com/th/id/OIP.U1aFo8BQ5ZFv_7TWsP4SowHaEo?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3', route: '/moviesection', icon: <FaMusic /> },
    { titleKey: 'topPicks.languagesKnown', imgSrc: 'https://picsum.photos/seed/music/250/200', route: '/music', icon: <FaMusic /> },
    { titleKey: 'topPicks.projects', imgSrc: 'https://picsum.photos/seed/innovation/250/200', route: '/projects', icon: <FaProjectDiagram /> },
    { titleKey: 'topPicks.reading', imgSrc: 'https://picsum.photos/seed/books/250/200', route: '/reading', icon: <FaBook /> },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://picsum.photos/seed/connect/250/200', route: '/contact-me', icon: <FaEnvelope /> },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://picsum.photos/seed/medal/250/200', route: '/certifications', icon: <FaCertificate /> },
  ],
};

type LikesState = Record<string, { count: number; liked: boolean }>;

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

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
      <h2 className="row-title">{t('topPicks.title')} {t(`profiles.${profile}`)}</h2>
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
              <img src={pick.imgSrc} alt={t(pick.titleKey)} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{t(pick.titleKey)}</div>
              </div>
              <div
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
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
                title={liked ? t('topPicks.unlike') : t('topPicks.like')}
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
