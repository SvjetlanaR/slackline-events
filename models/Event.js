const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
  title: String,
  description: String,
  equipment: String,
  time: String,
  duration: String,
  location: String,
  counter: Number
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;