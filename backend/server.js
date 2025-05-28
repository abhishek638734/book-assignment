const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(cors({
  origin: '*', 
}));


const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.2 },
  { title: '1984', author: 'George Orwell', rating: 4.6 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.3 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.7 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.5 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.0 },
  { title: 'Brave New World', author: 'Aldous Huxley', rating: 4.4 },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.9 },
  { title: 'Animal Farm', author: 'George Orwell', rating: 4.1 },
  { title: 'Moby Dick', author: 'Herman Melville', rating: 3.9 },
  { title: 'War and Peace', author: 'Leo Tolstoy', rating: 4.6 },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.5 },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', rating: 4.2 },
  { title: 'Wuthering Heights', author: 'Emily Brontë', rating: 4.1 },
  { title: 'The Odyssey', author: 'Homer', rating: 4.3 },
  { title: 'The Iliad', author: 'Homer', rating: 4.2 },
  { title: 'Frankenstein', author: 'Mary Shelley', rating: 4.0 },
  { title: 'Dracula', author: 'Bram Stoker', rating: 4.1 },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', rating: 4.4 },
  { title: 'The Alchemist', author: 'Paulo Coelho', rating: 4.3 },
];


app.get('/books', (req, res) => {
  res.json(books);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
