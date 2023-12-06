const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import CORS module
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Existing Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Read data from file
const readFileData = () => {
  try {
    return fs.readFileSync('data.txt', 'utf8');
  } catch (err) {
    console.error(err);
    return '';
  }
};

// Write data to file
const writeFileData = (data) => {
  fs.writeFileSync('data.txt', data, 'utf8');
};

// CRUD Operations
// Create
app.post('/create', (req, res) => {
  const content = req.body.content;
  writeFileData(content);
  res.send('Data created');
});

// Read
app.get('/read', (req, res) => {
  const data = readFileData();
  res.send(data);
});

// Update
app.post('/update', (req, res) => {
  const content = req.body.content;
  writeFileData(content);
  res.send('Data updated');
});

// Delete
app.post('/delete', (req, res) => {
  writeFileData('');
  res.send('Data deleted');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
