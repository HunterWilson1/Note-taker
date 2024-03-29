const path = require("path");
const router = require("express").Router();

//second route is at notes endpoint so when a get request is made to /notes this html is sent
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

/*first route is defined at root and sends the index when GET request is sent */
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = router;
