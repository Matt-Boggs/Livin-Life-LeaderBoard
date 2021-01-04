const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/championsofupkeep"
);

const championSeed = [
  {
    name: "Matt"
  },
  {
    name: "John"
  },
  {
    name: "Jill"
  }
];

const upkeepSeed = [
    {
      deed: "Wash the Dishes",
      category: "Physical",
      timeCost: 30,
      perennial: "Daily"
    },
    {
      deed: "Vacuum",
      category: "Physical",
      timeCost: 15,
      perennial: "Weekly"
    }
];

db.Champion
  .remove({})
  .then(() => db.Champion.collection.insertMany(championSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Upkeep
  .remove({})
  .then(() => db.Upkeep.collection.insertMany(upkeepSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
