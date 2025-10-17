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
    { titleKey: 'topPicks.skills', imgSrc: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHNod3d2MThqeGY5MWh5dzl6dGR1dDkyMHh1Mm51OWF5ajgxaWNncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ghL9VsfrEv9axYk/giphy.gif', route: '/skills', icon: <FaCode /> },
    { titleKey: 'topPicks.projects', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWFmbHJ0cmM5aWxrZTB1cWVweHQyb3ZvNHZseHlubGE1cHUwMXNtbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2zdnl4CB3OygOHe1kX/giphy.gif', route: '/projects', icon: <FaProjectDiagram /> },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazA1a3U4dDZ5YjFkZnF4ZjY0NmlsbjZ0emUybTFpNWtjcDB2azdkcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UShhjgfUzp9ragPafv/giphy.gif', route: '/certifications', icon: <FaCertificate /> },
    { titleKey: 'topPicks.experience', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWN3bzR4YndxeWtvYm1icXV5NGJmdDhrenUwaGMxMGRjd255dG85bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DXjDqmNL6HOsrhXedI/giphy.gif', route: '/work-experience', icon: <FaBriefcase /> },
    { titleKey: 'topPicks.recommendations', imgSrc: 'https://media.tenor.com/mLJMHti0YdoAAAAj/opinion-matters-now-your-opinion-matters.gif', route: '/recommendations', icon: <FaHandsHelping /> },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NXg2cWw0c3I4dnRiNW00aHc0ZHdsZG5yYTlmMjZ1ZDh1bG5manhtciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0PCCgWph6W0pT5uBuf/giphy.gif', route: '/contact-me', icon: <FaEnvelope /> },
  ],
  stalker: [
    { titleKey: 'topPicks.recommendations', imgSrc: 'https://media.tenor.com/fXtFFZt8aVUAAAAM/greys-anatomy-kathleen-shepherd.gif', route: '/recommendations', icon: <FaHandsHelping /> },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTd2bWViZXY1c2owZjBweHR2eXZiMTZ4cXN3a3lpOHRvNW9tOWZuYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1p74BBfYv8JwNC8SYI/giphy.gif', route: '/contact-me', icon: <FaEnvelope /> },
    { titleKey: 'topPicks.projects', imgSrc: 'https://media.tenor.com/qhp1miivWQEAAAAM/estimating-software.gif', route: '/projects', icon: <FaProjectDiagram /> },
    { titleKey: 'topPicks.experience', imgSrc: 'https://media.tenor.com/qZAsQuZxfAAAAAAM/imagination-spongebob-squarepants.gif', route: '/work-experience', icon: <FaBriefcase /> },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamVsZjRiNG1wMnVybHBqMTd5bDB2bXcwdmM2YjNhc2l6emY2OGJ3ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lfZahQ89QU3ruLvjL1/giphy.gif', route: '/certifications', icon: <FaCertificate /> },
    { titleKey: 'topPicks.socials', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd25vMGFuemZyNmh3ZjI1N2RvNDFrYW1neGUyY3Y0eXhneWg4cnp4ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UFr9orQIBICCU29JvP/giphy.gif', route: '/socials', icon: <FaCertificate /> },
  ],
  adventurer: [
    { titleKey: 'topPicks.placesVisited', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2F5c2VoczliODhtMHpsYzZjcnQwbGZldGhlOHE5b3diMzdzOWtpayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AwcsYcx6k8GhFpcWaO/giphy.gif', route: '/placesvisited', icon: <FaMusic /> },
    { titleKey: 'topPicks.moviesReviews', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDAzbDRqcDZ4emVuZTJpYnczczl4Y2dxNHlmYTZ2dGM4cjY0dG5tNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pyHTKJ4G9WGQKd12cl/giphy.gif', route: '/moviesection', icon: <FaMusic /> },
    { titleKey: 'topPicks.languagesKnown', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bnZycXplMnI3dG95YjAwZGxqc2xpaDBhNGh2bjI5b2ttMXRzOXZvdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UTBLCDQAyPFnOTsQxr/giphy.gif', route: '/music', icon: <FaMusic /> },
    { titleKey: 'topPicks.projects', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NkeWY2NDdweHV0N2dlbTV3bDd2Y3p0c20yazViYWlraWJsZTJ5ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z4YKVHaOo7k6Q/giphy.gif', route: '/projects', icon: <FaProjectDiagram /> },
    { titleKey: 'topPicks.reading', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWhkM2w0MzBnbTkzcjBmMTVzMXA1ZHNzMnNsbm8zanpzNmN3MTN4ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8dYmJ6Buo3lYY/giphy.gif', route: '/reading', icon: <FaBook /> },
    { titleKey: 'topPicks.contactMe', imgSrc: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OW5haGhnaGx4cjBsNWNudnlvMmd2OXBrb2RsMG91cDRoYnVxNTg3dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XGDvskITCsacFptkxf/giphy.gif', route: '/contact-me', icon: <FaEnvelope /> },
    { titleKey: 'topPicks.certifications', imgSrc: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExajg0OGNzcDZnNGV0emxwZDBtNTZqbDhmamswZW0wZHBoOXBnZXUxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fnukeZKiRoVNdYrKs2/giphy.gif', route: '/certifications', icon: <FaCertificate /> },
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
