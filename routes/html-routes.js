const express = require('express');
const path = require('path');
const router = express.Router();

// Define the root path for serving static files
const staticPath = path.join(__dirname, '../../public');

// Serve the index.html file at the root path
router.get('/', (req, res) => {
  res.sendFile(path.join(staticPath + 'index.html'));
});

// Serve the notes.html file at the /notes path
router.get('/notes', (req, res) => {
  res.sendFile(path.join(staticPath + 'notes.html'));
});

// Serve the index.html file for all other paths
router.get('*', (req, res) => {
  res.sendFile(path.join(staticPath + 'index.html'));
});

module.exports = html;