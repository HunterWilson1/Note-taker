const router = require("express").Router();
const data = require("../db/data");

//This does a get request from /notes and reads data from the db.json using the fs
//It then sends the JSON data back to user
router.get("/notes", (req, res) => {
  data
    .getNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

//router endpooint
router.post("/notes", (req, res) => {
  data
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  data
    .delNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;
