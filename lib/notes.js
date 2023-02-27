const fs = require('fs').promises;
const path = require('path');

async function createNewNote (body, notes) {
  const note = body;
  notes.push(note);
  await writeNotesToFile(notes);
  return note;
}

// delete note with matching ID
async function deleteNote (id, notes) {
  const notesArray = notes.filter(note => note.id !== id);

  // re-index notes
  for (let i = 0; i < notesArray.length; i++) {
    notesArray[i].id = i;
  }

  await writeNotesToFile(notesArray);
  return notesArray;
}

async function writeNotesToFile(notes) {
  try {
    await fs.writeFile(
      path.join(__dirname, '../db/notes.json'),
      JSON.stringify({ notes }, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  createNewNote,
  deleteNote
};