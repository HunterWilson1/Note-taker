const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const api = require("./routes/apiRoute");
const html = require("./routes/htmlRoute");

app.use(express.static("public"));

app.use("/api", api);
app.use("/", html);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () => {
  console.log(`App server hosted on ${PORT}`);
});