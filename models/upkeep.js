const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const upkeepSchema = new Schema({

    // MOST OF THESE THINGS WILL BE ARRAYS FOR NOW, THE USER SHOULD BE PICKING FROM CHOICES, NOT PROVIDING THEIR OWN


  deed: { type: String, required: true },
  // Everything below is preliminary

  // something like [Physical, Mental, Spiritual]
  // FOR EXAMPLE, but this isnt likely to make the cut
  category: {type: Array, required: true},

  // This would maybe be [5, 15, 30, 60] in minutes
  timeCost: {type: Array, required: true},

  // For lack of a better word, perennial meaning, how often this chore should be done, ie daily, weekly, monthly, etc...
  perennial: {type: Array, required: true}

});

const Upkeep = mongoose.model("Upkeep", upkeepSchema);

module.exports = Upkeep;
