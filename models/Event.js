const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  description: String,
  equipment: String,
  date: String,
  time: String,
  duration: String,
  location: String,
  counter: Number,
  userEmail: String,
  // join: { type: Boolean, default: false}
  // join: Number
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;