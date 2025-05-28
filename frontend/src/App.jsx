import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setDisplayBooks(data);
      });
  }, []);

  const handleShowBooks = () => {
    setShowBooks(true);
    setDisplayBooks(books);
    setSearch('');
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setDisplayBooks(
      books.filter(book =>
        book.title.toLowerCase().includes(value.toLowerCase()) ||
        book.author.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="App" style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f7f8fa', minHeight: '100vh', padding: '2rem', color: '#fff' }}>
      <div style={{ maxWidth: 500, margin: '2rem auto', background: '#212121', borderRadius: 12, boxShadow: '0 2px 12px #0001', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Book List</h1>
        <button
          onClick={handleShowBooks}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#0078d4',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 18,
            cursor: 'pointer',
            marginBottom: 20,
            transition: 'background 0.2s'
          }}
        >
          Show All Books
        </button>

        {showBooks && (
          <>
            <input
              type="text"
              placeholder="Search by title or author"
              value={search}
              onChange={handleSearch}
              style={{
                width: '100%',
                padding: '0.6rem 1rem',
                marginBottom: 20,
                border: '1px solid #ddd',
                borderRadius: 8,
                fontSize: 16,
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {displayBooks.length === 0 ? (
                <li style={{ color: '#888', textAlign: 'center' }}>No books found.</li>
              ) : (
                displayBooks.map((book, idx) => (
                  <li
                    key={idx}
                    style={{
                      background: '#f1f3f6',
                      marginBottom: 12,
                      padding: '1rem',
                      borderRadius: 8,
                      boxShadow: '0 1px 4px #0001',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span style={{ color: '#000',fontWeight: 600, fontSize: 18 }}>{book.title}</span>
                    <span style={{ color: '#555', margin: '4px 0' }}>by {book.author}</span>
                    <span style={{ color: '#0078d4', fontWeight: 500 }}>Rating: {book.rating}</span>
                  </li>
                ))
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
