const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const UserRoute = require('./Root/user.route');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());





app.use('/api/v1/user', UserRoute);


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
module.exports = app;