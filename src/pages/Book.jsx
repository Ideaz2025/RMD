import React from 'react';
import { books } from './data.js';
import './data.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Books = () => {
  return (
    <div className="book-container">
      <HelmetProvider>
        <Helmet>
          <title>Books | Publication Summary</title>
        </Helmet>
      </HelmetProvider>
      <h2 className="book-title">Books</h2>
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <strong>Title:</strong> <em>{book.title}</em><br />
            <strong>Authors:</strong> {book.authors.join(", ")}<br />
            <strong>Publisher:</strong> {book.publisher}<br />
            <strong>ISBN:</strong> {book.isbn}<br />
            {book.issueDate && (
              <>
                <strong>Issue Date:</strong> {book.issueDate}<br />
              </>
            )}
            {book.pdf && (
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="view-book-link"
              >
                📘 View Book
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
