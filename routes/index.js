const router = require('express').Router();
const notes = require('./api/notes');
const db = require('../db/notes.json');

router.use(notes);

module.exports = router;
