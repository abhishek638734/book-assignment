const express = require('express');
const cors = require('cors');
const path = require('path');
const bookRoutes = require('./routes/books');

const app = express();
app.use(cors());

app.use('/books', bookRoutes);

// Serve static files from frontend/dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback for React router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
