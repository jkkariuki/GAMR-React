const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  gameTitle: { type: String},
  image_url: { type: String },
  release_date:{ type: Date},
  description: { type: String}
});

const game = mongoose.model("Game", gameSchema);

module.exports = game;