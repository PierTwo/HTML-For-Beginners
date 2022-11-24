const { Schema, model } = require('mongoose');

const tutorialSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  tutorial_id: {
    type: Number,
    required: false,
    unique: false,
  },
  step_completed: {
    type: Number,
    required: false,
    unique: false,
  },
});
const Tutorial = model('Tutorial', tutorialSchema);
module.exports = Tutorial;
