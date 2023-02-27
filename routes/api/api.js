const router = require('express').Router();

const saved = require('../db/save.js');

router.get('/notes', (req, res) => {
    saved.readFile().then((notes) => res.json(JSON.parse(notes)));
});

router.post('/notes', (req, res) => {
    saved.writeFile(req.body).then(() => res.json({ ok: true }));
});

router.delete('/notes/:id', (req, res) => {
    saved.deleteFile(req.params.id).then(() => res.json({ ok: true }));
});

module.exports = router;