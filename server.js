const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const gamesController = require("./controllers/gamesController")

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(gamesController);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gamrdb",
  {
    useMongoClient: true
  }
  
);

// mongoose.Promise = Promise;
// // Connect to the Mongo DB

// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/gamrdb';

// mongoose.connect(dbURI)
//   .then(() => console.log('connected to DB!'))
//   .catch((err) => console.log(err));


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
