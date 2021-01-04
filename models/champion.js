const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, default: 0 }
});

const Champion = mongoose.model("Champion", championSchema);

module.exports = Champion;
