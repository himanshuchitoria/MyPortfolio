import React, { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ContinueWatching.css';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

type ContinueWatchItem = {
  titleKey: string;
  imgSrc: string;
  link: string;
};

const continueWatchingConfig: Record<ProfileType, ContinueWatchItem[]> = {
  recruiter: [
    { titleKey: "continueWatching.languagesKnown", imgSrc: "https://images.pexels.com/photos/31418370/pexels-photo-31418370.jpeg", link: "/music" },
    { titleKey: "continueWatching.reading", imgSrc: "https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg", link: "/reading" },
    { titleKey: "continueWatching.extraCurricular", imgSrc: "https://cdn.pixabay.com/photo/2016/05/18/18/37/rubber-duck-1401225_640.jpg", link: "/blogs" },
    { titleKey: "continueWatching.contactMe", imgSrc: "https://cdn.pixabay.com/photo/2019/02/26/10/29/mailbox-4021625_640.jpg", link: "/contact-me" },
    { titleKey: "continueWatching.moviesReviews", imgSrc: "https://images.pexels.com/photos/7234287/pexels-photo-7234287.jpeg", link: "/moviesection" },
    { titleKey: "continueWatching.dailyNewsUpdates", imgSrc: "https://cdn.pixabay.com/photo/2021/10/14/23/23/typewriter-6710556_640.jpg", link: "/newsupdates" }
  ],
  developer: [
    { titleKey: "continueWatching.languagesKnown", imgSrc: "https://images.pexels.com/photos/8015666/pexels-photo-8015666.jpeg", link: "/music" },
    { titleKey: "continueWatching.reading", imgSrc: "https://images.pexels.com/photos/582070/pexels-photo-582070.jpeg", link: "/reading" },
    { titleKey: "continueWatching.extraCurricular", imgSrc: "https://images.pexels.com/photos/5896676/pexels-photo-5896676.jpeg", link: "/blogs" },
    { titleKey: "continueWatching.certifications", imgSrc: "https://images.pexels.com/photos/8386713/pexels-photo-8386713.jpeg", link: "/certifications" }
  ],
  stalker: [
    { titleKey: "continueWatching.reading", imgSrc: "https://images.pexels.com/photos/18638955/pexels-photo-18638955.jpeg", link: "/reading" },
    { titleKey: "continueWatching.extraCurricular", imgSrc: "https://images.pexels.com/photos/12196701/pexels-photo-12196701.jpeg", link: "/blogs" },
    { titleKey: "continueWatching.dailyNewsUpdates", imgSrc: "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg", link: "/newsupdates" }
  ],
  adventurer: [
    { titleKey: "continueWatching.reading", imgSrc: "https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg", link: "/reading" },
    { titleKey: "continueWatching.certifications", imgSrc: "https://images.pexels.com/photos/2293027/pexels-photo-2293027.jpeg", link: "/certifications" },
    { titleKey: "continueWatching.contactMe", imgSrc: "https://images.pexels.com/photos/19891092/pexels-photo-19891092.jpeg", link: "/contact-me" },
    { titleKey: "continueWatching.socials", imgSrc: "https://th.bing.com/th/id/OIP.e13y_Fq1KhIhEMpk8p8vrAHaE8?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3", link: "/socials" }
  ]
};

type LikesState = Record<string, { count: number; liked: boolean }>;

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const { t } = useTranslation();
  const continueWatching = continueWatchingConfig[profile];

  const initialLikes = useMemo<LikesState>(() => {
    const state: LikesState = {};
    continueWatching.forEach((item) => {
      state[item.link] = { count: Math.floor(Math.random() * 10), liked: false };
    });
    return state;
  }, [continueWatching]);

  const [likes, setLikes] = useState<LikesState>(initialLikes);

  const toggleLike = useCallback((link: string) => {
    setLikes((prev) => {
      const current = prev[link] ?? { count: 0, liked: false };
      const nextLiked = !current.liked;
      return {
        ...prev,
        [link]: {
          liked: nextLiked,
          count: nextLiked ? current.count + 1 : Math.max(0, current.count - 1),
        },
      };
    });
  }, []);

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">{t('continueWatching.title')} {t(`profiles.${profile}`)}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => {
          const liked = likes[pick.link]?.liked ?? false;
          const count = likes[pick.link]?.count ?? 0;

          return (
            <Link to={pick.link} key={index} className="pick-card">
              <img src={pick.imgSrc} alt={t(pick.titleKey)} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{t(pick.titleKey)}</div>
              </div>

              <div
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleLike(pick.link);
                }}
                aria-pressed={liked}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleLike(pick.link);
                  }
                }}
                title={liked ? t('continueWatching.unlike') : t('continueWatching.like')}
              >
                {liked ? <FaThumbsUp className="like-icon" /> : <FaRegThumbsUp className="like-icon" />}
                <span className="like-count">{count}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContinueWatching;
