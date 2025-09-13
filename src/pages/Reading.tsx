import React from 'react';
import './Reading.css';
import harrypotter from '../images/harrypotter.webp';
import atomichabits from '../images/atomic_habits.jpg';

const books = [
  {
    title: "Harry Potter Series",
    author: "J.K. Rowling",
    imgSrc: harrypotter,
    description: "A magical journey of friendship, bravery, and self-discovery in the wizarding world.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomichabits,
    description: "This book provides practical strategies to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">My Interest in Books</h2>
      <p className="reading-intro"></p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
