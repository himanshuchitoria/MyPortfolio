import React, { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

type ContinueWatchItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const continueWatchingConfig: Record<ProfileType, ContinueWatchItem[]> = {
  recruiter: [
    { title: "Languages Known", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Extra Curricular", imgSrc: "https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
    { title: "Watch Movies", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/moviesection" }
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

type LikesState = Record<string, { count: number; liked: boolean }>;

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  // Initialize likes with random counts between 0 and 99
  const initialLikes = useMemo<LikesState>(() => {
    const state: LikesState = {};
    continueWatching.forEach((item) => {
      const randomCount = Math.floor(Math.random() * 10);
      state[item.link] = { count: randomCount, liked: false };
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
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => {
          const liked = likes[pick.link]?.liked ?? false;
          const count = likes[pick.link]?.count ?? 0;

          return (
            <Link to={pick.link} key={index} className="pick-card">
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>

              {/* Like icon only, no background, with zoom on hover */}
              <div
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={(e) => {
                  e.preventDefault(); // prevent navigation on like click
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
                title={liked ? 'Unlike' : 'Like'}
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
