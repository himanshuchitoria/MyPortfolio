import React, { useEffect, useState } from 'react';
import './MovieSection.css';
import newphoto from '../images/strangerthings.jpg';
import { FaPlay, FaSearch } from 'react-icons/fa';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWZiMTQ0MDM1MmJhNTRjY2IyZGE5MGRmNjU5ZmFiZCIsIm5iZiI6MTc1NzYxNTI3NS44NzEsInN1YiI6IjY4YzMxNGFiM2JmMmI5MDhiZjhkMDczOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pIt2O32qtT3g08e5IfSduo4oU3bxDYnAMB6SEzzHMaw';

interface Review {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

interface MovieImage {
  file_path: string;
}
interface Movie {
  id: number;
  title: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

interface MovieCategory {
  key: string;
  title: string;
  fetchUrl: string;
}

const categories: MovieCategory[] = [
  { key: 'trending', title: 'Trending Now', fetchUrl: '/trending/all/week' },
  { key: 'topRated', title: 'Top Rated', fetchUrl: '/movie/top_rated' },
  { key: 'originals', title: 'Netflix Originals', fetchUrl: '/discover/tv?with_networks=213' },
  { key: 'action', title: 'Action Movies', fetchUrl: '/discover/movie?with_genres=28' },
  { key: 'comedy', title: 'Comedy Movies', fetchUrl: '/discover/movie?with_genres=35' },
  { key: 'horror', title: 'Horror Movies', fetchUrl: '/discover/movie?with_genres=27' },
  { key: 'romance', title: 'Romance Movies', fetchUrl: '/discover/movie?with_genres=10749' },
  { key: 'documentaries', title: 'Documentaries', fetchUrl: '/discover/movie?with_genres=99' }
];



const Banner: React.FC<{ featured?: Movie }> = ({ featured }) => {
  const imageUrl =
    featured && featured.backdrop_path
      ? `https://image.tmdb.org/t/p/original${featured.backdrop_path}`
      : newphoto;
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">STRANGER THINGS</h1>
        <h2 className="banner-desc"></h2>
        <div className="banner-buttons">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className="banner-btn play-btn">
            <FaPlay style={{ marginRight: '10px', paddingTop: '0' }} />Play

          </button>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className="banner-btn info-btn">More Info</button>
          </a>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

const MovieSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [popupMovie, setPopupMovie] = useState<Movie | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string>('');
  const [movieImages, setMovieImages] = useState<MovieImage[]>([]);
  const [movieReviews, setMovieReviews] = useState<Review[]>([]);
  const [loadingPopup, setLoadingPopup] = useState(false);
  const [expandedReview, setExpandedReview] = useState<string | null>(null);

  useEffect(() => {
  if (popupMovie) {
    // Prevent background (body) scroll
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  // Clean up on unmount or popup close
  return () => { document.body.style.overflow = ""; };
}, [popupMovie]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    setLoadingSearch(true);
    setSearchError(null);
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `${TMDB_BASE_URL}/search/multi?query=${encodeURIComponent(searchTerm)}&language=en-US&page=1&include_adult=false`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
              'Content-Type': 'application/json;charset=utf-8',
            },
          }
        );
        if (!response.ok) throw new Error('Search API Error');
        const data = await response.json();
        const movies: Movie[] = (data.results || []).filter(
          (item: any) => !!item.poster_path
        );
        setSearchResults(movies);
      } catch (err) {
        setSearchError(
          err instanceof Error ? err.message : 'Failed to fetch results.'
        );
      } finally {
        setLoadingSearch(false);
      }
    }, 650);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Popup trailer+images+reviews fetch logic
  useEffect(() => {
    if (!popupMovie) return;
    setLoadingPopup(true);
    setTrailerUrl('');
    setMovieImages([]);
    setMovieReviews([]);
    // Fetch trailer
    fetch(`${TMDB_BASE_URL}/movie/${popupMovie.id}/videos`, {
      headers: {
        Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      }
    })
      .then(res => res.json())
      .then(data => {
        const trailer = (data.results || []).find(
          (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`);
        }
      });
    // Fetch images
    fetch(`${TMDB_BASE_URL}/movie/${popupMovie.id}/images`, {
      headers: {
        Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      }
    })
      .then(res => res.json())
      .then(data => {
        setMovieImages((data.backdrops || []).slice(0, 5));
      });
    // Fetch reviews
    fetch(`${TMDB_BASE_URL}/movie/${popupMovie.id}/reviews`, {
      headers: {
        Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      }
    })
      .then(res => res.json())
      .then(data => {
        setMovieReviews((data.results || []).slice(0, 4));
        setLoadingPopup(false);
      });
  }, [popupMovie]);

  // MovieRow component
  const MovieRow: React.FC<{ title: string; fetchUrl: string }> = ({
    title, fetchUrl
  }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchMovies = async () => {
        setLoading(true);
        const response = await fetch(`${TMDB_BASE_URL}${fetchUrl}`, {
          headers: {
            Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
        const data = await response.json();
        setMovies(data.results || []);
        setLoading(false);
      };
      fetchMovies();
    }, [fetchUrl]);
    return (
      <div className="movie-row-container">
        <h3 className="movie-row-title">{title}</h3>
        <div className="movie-row-scroll">
          {loading
            ? <div className="movie-loader">Loading...</div>
            : movies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-row-card"
                  tabIndex={0}
                  onClick={() => setPopupMovie(movie)}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : 'https://via.placeholder.com/300x450?text=No+Image'
                    }
                    alt={movie.title || movie.name}
                    className="movie-row-poster"
                  />
                  <div className="movie-row-overlay">
                    <div className="movie-row-title-overlay">{movie.title || movie.name}</div>
                    <div className="movie-row-rating-overlay">⭐ {movie.vote_average.toFixed(1)}</div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    );
  };

  return (
    <div className="movie-main-netflix">
      <div className="search-bar-fixed">
        <FaSearch className="search-icon-inside" size={20} color="#bbb" />
        <input
          type="search"
          placeholder="     Search any movie or show"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-label="Search movies"
          className="search-input"
        />
      </div>
      <Banner />
      {searchTerm && (
        <div className="movie-section-rows">
          {loadingSearch ? (
            <div className="movie-loader">Searching...</div>
          ) : searchError ? (
            <div className="search-error">{searchError}</div>
          ) : searchResults.length === 0 ? (
            <div className="no-results">No results found.</div>
          ) : (
            <div className="movie-row-container">
              <h3 className="movie-row-title">Results for "{searchTerm}"</h3>
              <div className="movie-row-scroll">
                {searchResults.map((movie) => (
                  <div key={movie.id} className="movie-row-card" tabIndex={0} onClick={() => setPopupMovie(movie)}>
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : 'https://via.placeholder.com/300x450?text=No+Image'
                      }
                      alt={movie.title || movie.name}
                      className="movie-row-poster"
                    />
                    <div className="movie-row-overlay">
                      <div className="movie-row-title-overlay">{movie.title || movie.name}</div>
                      <div className="movie-row-rating-overlay">⭐ {movie.vote_average.toFixed(1)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {!searchTerm && (
        <div className="movie-section-rows">
          {categories.map((cat) => (
            <MovieRow key={cat.key} title={cat.title} fetchUrl={cat.fetchUrl} />
          ))}
        </div>
      )}
      {/* Movie Details Popup */}
      {popupMovie && (
        <div className="movie-popup-overlay" onClick={() => setPopupMovie(null)}>
          <div className="movie-popup-modal" onClick={e => e.stopPropagation()}>
            {loadingPopup ? (
              <div className="movie-loader">Loading...</div>
            ) : (
              <>
                <div className="popup-trailer-row" style={{ position: 'relative', width: '100%', height: '390px', borderRadius: '18px 18px 0 0', overflow: 'hidden', background: '#000' }}>
                  {trailerUrl && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={trailerUrl}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="Movie Popup Trailer"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                  )}
                </div>
                <div className="popup-title">{popupMovie.title || popupMovie.name}</div>
                <div className="popup-images-row" style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {movieImages.map(img => (
                    <img
                      key={img.file_path}
                      src={`https://image.tmdb.org/t/p/w300${img.file_path}`}
                      alt="movie"
                      className="popup-image"
                    />
                  ))}
                </div>
                <div className="popup-review-row">
                  {movieReviews.length === 0 ? (
                    <div className="popup-review-none">No reviews available.</div>
                  ) : (
                    movieReviews.map((rev) => {
                      const expanded = expandedReview === rev.id;
                      return (
                        <div key={rev.id} className="popup-review">
                          <div className="popup-review-author">@{rev.author}</div>
                          <div
                            className={`popup-review-content${expanded ? ' expanded' : ''}`}
                            style={
                              expanded
                                ? { maxHeight: 'none', overflow: 'visible', WebkitLineClamp: 'none', display: 'block' }
                                : {
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical'
                                  }
                            }
                          >
                            {rev.content}
                          </div>
                          <div className="popup-review-date">{new Date(rev.created_at).toLocaleDateString()}</div>
                          {!expanded && (
                            <button
                              className="popup-show-more"
                              onClick={() => setExpandedReview(rev.id)}
                            >
                              Show More
                            </button>
                          )}
                          {expanded && (
                            <button
                              className="popup-show-less"
                              onClick={() => setExpandedReview(null)}
                            >
                              Show Less
                            </button>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            )}
            <button className="popup-close-btn" onClick={() => setPopupMovie(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSection;
