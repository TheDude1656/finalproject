const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


const db = require("./models");
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//requiring routes
require('./routes')(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app Define any API routes before this runs
app
  .get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

db
  .sequelize
  .sync({ force: true })
  .then(function () {

    app
      .listen(PORT, function () {
        console.log(`🌎 ==> Server now on port ${PORT}!`);
      });
  });

module.exports = app;