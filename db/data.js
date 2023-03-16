//defining fs fil
const fs = require('fs')
const util = require('util')
const { v4: uuidv4 } = require('uuid');
//define read and write

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Data {
    //reads content of db.json
    read() {
        return readFile("db/db.json", "utf8" )
    }

    //Write the contents of note to db.json
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }
    
    getNotes() {
        return this.read().then((notes) => {
            let blip ;
            try {
                blip = [].concat(JSON.parse(notes))
            } catch (error) {
            blip = [] 
            }
            return blip;
        })
    }
    

    addNote(note) {
        const {title, text} = note;
        
        //new object with id
        const newNote = {title, text, id: uuidv4()};

        return this.getNotes()
            //gets all notes from db.json, concates existing notes with new note and saves it,
            //and returns new note object
            .then((notes) => [...notes, newNote])
            .then(savedNotes => this.write(savedNotes))
            .then(() => newNote)
    }

    //deletes not with given id from db.json
    delNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filNotes  => this.write(filNotes))
    }
}

module.exports = new Data()