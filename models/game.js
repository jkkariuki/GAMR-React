const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  gameTitle: { type: String, required: true },
  //url: { type: String, required: true },
  //article_Date:{ type: String, required: true},
  //dateSaved: { type: Date, default: Date.now }
});

const game = mongoose.model("Game", gameSchema);

module.exports = game;