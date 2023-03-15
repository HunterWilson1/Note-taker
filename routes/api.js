const router = require('express').Router()
const fs = require('fs');

//This does a get request from /notes and reads data from the db.json using the fs
//It then sends the JSON data back to user
router.get("/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

//router endpooint
router.post("/notes", (req, res) => {
    //reads what is in db.json
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;

        //parses the data from db.json
        const newNote = JSON.parse(data)
        //appends the new note content
        newNote.push(req.body);

        //writes the updated newNote array to the db.json file
        fs.writeFile('./db/db.json', JSON.stringify(newNote), (err) => {
            if (err) throw err;
            console.log("It worked")
        })
    })

    //ends response
    res.end
})


module.exports = router;

