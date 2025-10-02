import React, { useState, useEffect } from 'react';
import './NewsUpdates.css';

const API_KEY = 'pub_29a546e6523e4bf189ae0d3b08f94735'; // <-- Replace with your newsdata.io API key

const CATEGORIES = [
  { label: "Technology", value: "technology" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Sports", value: "sports" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Business", value: "business" }
];

type Article = {
  title: string;
  description: string;
  image_url: string;
  link: string;
  source_id: string;
  pubDate: string;
};

const NewsUpdates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].value);
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
   
  //to scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Fetch news from newsdata.io
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      setArticles([]);
      try {
        const categoryParam = selectedCategory ? `&category=${selectedCategory}` : '';
        const qParam = searchTerm ? `&q=${encodeURIComponent(searchTerm)}` : '';
        const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}${categoryParam}${qParam}&country=in&language=en`;

        const res = await fetch(url);
        const data = await res.json();

        if (!data?.results || data.results.length === 0) {
          setError("No news found for this category or search.");
          setArticles([]);
        } else {
          setArticles(data.results);
        }
      } catch (e) {
        setError('Failed to fetch news. Try later.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [selectedCategory, searchTerm]);

  // Highlight top pick: First article
  const topPick = articles.length > 0 ? articles[0] : null;
  const restArticles = articles.slice(1);

  function truncateWords(text: string | null | undefined, maxWords: number): string {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
}


  return (
    <div className="news-main-wrapper">
      <header className="news-header">
        <h1 className="news-title">Daily News Updates</h1>
        <nav className="news-categories-nav" aria-label="Main categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              className={`news-category-btn${selectedCategory === cat.value ? ' active' : ''}`}
              onClick={() => { setSelectedCategory(cat.value); setSearchTerm(''); }}
              aria-pressed={selectedCategory === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </nav>
        <div className="news-search-block">
          <input
            type="search"
            placeholder="Search news…"
            value={searchTerm}
            className="news-search-input"
            onChange={e => setSearchTerm(e.target.value)}
            aria-label="Search news"
          />
        </div>
      </header>

      <section>
        {loading && <div className="news-loading">Loading fresh news…</div>}
        {error && <div className="news-error">{error}</div>}

        {!loading && !error && topPick && (
          <div className="news-top-card">
            <img
              src={topPick.image_url || '/default-news.jpg'}
              alt={topPick.title}
              className="news-top-image"
            />
            <div className="news-top-info">
              <h2 className="news-top-title">{topPick.title}</h2>
              <p className="news-top-desc">{truncateWords(topPick.description,25)}</p>
              <a href={topPick.link} className="news-top-link" target="_blank" rel="noopener noreferrer">
                Read Full Article 
              </a>
              <div className="news-top-meta">
                {topPick.source_id} · {new Date(topPick.pubDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}

        {!loading && restArticles.length > 0 && (
          <div className="news-grid">
            {restArticles.map((a, idx) => (
              <div key={a.link + idx} className="news-card">
                <img
                  src={a.image_url || '/default-news.jpg'}
                  alt={a.title}
                  className="news-card-img"
                />
                <div className="news-card-info">
                  <h3 className="news-card-title">{a.title}</h3>
                  <p className="news-card-desc">{truncateWords(a.description,25)}</p>
                  <a href={a.link} className="news-card-link" target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                  <div className="news-card-meta">
                    {a.source_id} · {new Date(a.pubDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="news-nothing">
            No news found for today.
          </div>
        )}
      </section>
    </div>
  );
};

export default NewsUpdates;
