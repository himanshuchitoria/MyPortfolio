import React from 'react';
import { useTranslation } from 'react-i18next';
import './Reading.css';
import harrypotter from '../images/harrypotter.webp';
import atomichabits from '../images/atomic_habits.jpg';

const booksData = [
  {
    key: "harry_potter",
    imgSrc: harrypotter,
  },
  {
    key: "atomic_habits",
    imgSrc: atomichabits,
  },
];

const Reading: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="reading-container">
      <h2 className="reading-title">{t('reading.myInterestInBooks')}</h2>
      <p className="reading-intro">{t('reading.intro')}</p>
      <div className="books-grid">
        {booksData.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={t(`reading.books.${book.key}.title`)} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{t(`reading.books.${book.key}.title`)}</h3>
              <h4 className="book-author">{t(`reading.books.${book.key}.author`)}</h4>
              <p className="book-description">{t(`reading.books.${book.key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
