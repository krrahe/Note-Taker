const fs = require('fs');
const until = require('until');

const readFileAsync = until.promisify(fs.readFile);
const writeFileAsync = until.promisify(fs.writeFile);

class Saved {
    writeFile(note) {
        return readFileAsync('database/input.json', 'utf8')
            .then((notes) => {
                const parsedNotes = [].concat(JSON.parse(notes));
                parsedNotes.push(note);
                return writeFileAsync('database/input.json', JSON.stringify(parsedNotes));
            });
    }
    readFile() {
        return readFileAsync('database/input.json', 'utf8');
    }
    deleteFile(id) {
        return readFileAsync('database/input.json', 'utf8')
            .then((notes) => {
                const parsedNotes = [].concat(JSON.parse(notes));
                const filteredNotes = parsedNotes.filter(note => note.id !== id);
                return writeFileAsync('database/input.json', JSON.stringify(filteredNotes));
            });
    }
}

module.exports = new Saved();