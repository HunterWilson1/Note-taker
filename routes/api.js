const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const noteDb = require("../db/db.json");


//get request to /notes
router.get('/notes', (req, res) => {
  res.json(noteDb);
});

//loops through array to find note with specific id
router.get("/notes", (req, res) => {
  for (let i = 0; i < noteDb.length; i++) {
    if (noteDb[i].id === req.params.id) {
      res.json(noteDb[i]);
    }
  }
});

//makes new object with title, text, and id. Then adds to noteDb array. then writes it to db.json file
router.post('/notes', (req, res) => {
  const newNote = {
    "title": req.body.title,
    "text": req.body.text,
    "id": uuidv4()
  }
  noteDb.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteDb, null, 2)
  )
  res.json(noteDb);
});


//loop through array for specific id and if found then removed
router.delete('/notes/:id', (req, res) => {
  for (let i = 0; i < noteDb.length; i++) {
    if (noteDb[i].id === req.params.id) {
      noteDb.splice(i, 1);
    }
  }
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteDb, null, 2)
  );
  res.json(noteDb);
});

module.exports = router;
