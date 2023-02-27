const express = require("express");
const router = express.Router();
const { createNewNote, deleteNote } = require("../../notes");

let {notes} = require("../../db");



router.get("/notes", (req, res) => {
  // Create a copy of notes to avoid modifying the original
  const results = [...notes];
  res.json(results);
});

router.post("/notes", (req, res) => {
  const newNote = req.body;
  // Check if notes is empty or undefined and set the ID accordingly
  if (!notes || notes.length === 0) {
    newNote.id = "0";
  } else {
    const lastNote = notes[notes.length - 1];
    newNote.id = String(parseInt(lastNote.id, 10) + 1);
  }
  // Create a copy of notes to avoid modifying the original
  const updatedNotes = [...notes, newNote];
  res.json(createNewNote(newNote, updatedNotes));
});

router.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  // Create a copy of notes to avoid modifying the original
  const updatedNotes = [...notes];
  await deleteNote(id, updatedNotes);
  res.json(updatedNotes);
});

module.exports = router;
