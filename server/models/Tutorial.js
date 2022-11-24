const { Schema, model } = require('mongoose');

const tutorialSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  tutorial_id: {
    type: Number,
    default: 0,
  },
  step_completed: {
    type: Number,
    default: 0,
  },
});
const Tutorial = model('Tutorial', tutorialSchema);
module.exports = Tutorial;
