const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const tutorialSeeds = require("./tutorialSeeds.json");
// Seeds go here
db.once("open", async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
