//defining fs fil
const fs = require('fs')
const util = require('util')
const { v4: uuidv4 } = require('uuid');
//define read and write

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Data {
    read() {
        return readFile("db/db.json", "utf8" )
    }
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
}

module.exports = new Data()