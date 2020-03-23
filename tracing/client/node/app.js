const express = require("express");
const bodyParser = require("body-parser");

const port = 8082;
const app = express();
app.use(bodyParser.json());
// app.get("/", (req, res) => res.send("helloworld"));
// module.exports = app;
app.get("/helloworld", (req, res) => {
  res.send("ENTERED");
});
app.listen(port, () => console.log(`listening port ${port}`));
