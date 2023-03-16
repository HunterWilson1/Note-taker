const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const api = require("./routes/api");
const html = require("./routes/html");

app.use(express.static("public"));

app.use("/api", api);

app.use("/", html);
app.use(express.urlencoded({extended: true}));

/* app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
); */

app.listen(PORT, () => {
  console.log(`App server hosted on ${PORT}`);
});
