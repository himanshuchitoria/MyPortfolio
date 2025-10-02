import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaPenNib, FaUserSecret } from 'react-icons/fa';
import './Blogs.css';

const Blogs: React.FC = () => {
  const { t } = useTranslation();

  const blogsRaw = t('blogs.items', { returnObjects: true });
  const blogs = Array.isArray(blogsRaw) ? blogsRaw : [];

  const iconMap: JSX.Element[] = [<FaUsers />, <FaPenNib />, <FaUserSecret />];

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">{t('blogs.extracurricular_title')}</h2>
      <p className="blogs-intro">{t('blogs.extracurricular_intro')}</p>
      <div className="blogs-grid">
        {blogs.map((blog, idx) => (
          <a
            href={blog.link || '#'}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            tabIndex={0}
            style={{ '--delay': `${idx * 0.13}s` } as React.CSSProperties}
          >
            <div className="blog-icon">{iconMap[idx]}</div>
            <div className="blog-info">
              <div className="blog-title">{blog.title}</div>
              <div className="blog-description">{blog.description}</div>
              <div className="blog-description">{blog.date}</div>
              <div className="blog-platform">{blog.platform}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
