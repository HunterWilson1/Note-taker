const router = require('express').Router()
const fs = require('fs');
const data = require('../db/data')
//This does a get request from /notes and reads data from the db.json using the fs
//It then sends the JSON data back to user
router.get("/notes", (req, res) => {
    data
    .getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
});



//router endpooint
router.post("/notes", (req, res) => {
    //reads what is in db.json
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;

        //parses the data from db.json
        const newNote = JSON.parse(data)
        //appends the new note content
        newNote.push(req.body);

        //writes the updated newNote array to the db.json file
        
    })

    //ends response
    res.end
})


module.exports = router;

