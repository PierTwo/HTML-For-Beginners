const { Schema, model } = require("mongoose");

const progressSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  step_completed: {
    type: Number,
    required: false,
    unique: false,
  },
  tutorial_id: {
    type: Number,
    required: false,
    unique: false,
  },
});
const Progress = model("Progress", progressSchema);
module.exports = Progress;
