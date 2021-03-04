const express = require("express");

const app = express();
var PORT = process.env.PORT || 5000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(__dirname +"/public/index.html");
})

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
})