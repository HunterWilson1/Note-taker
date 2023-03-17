const router = require("express").Router();
const path = require('path');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const noteDb = require('../db/db.json')


router.get("/notes", (req, res) => {
      res.json(notes);
});

/* //router endpooint
router.post("/notes", (req, res) => {
  data
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
 */
router.delete("/notes/:id", (req, res) => {
  for (let i = 0; i <  note.length; i++) {
    if (noteDb[i].id === req.params.id) {
      noteDb.splice(i, 1)
    }
  }
  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(noteDb, null, 2)
  )
  res.json(noteDb)
});

module.exports = router;
