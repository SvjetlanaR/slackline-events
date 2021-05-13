const router = require("express").Router();
const Event = require("../models/Event");

router.post("/", (req, res, next) => {
  const { title, description, equipment, time, duration, location, counter } =
    req.body;
  Event.create({
    title,
    description,
    equipment,
    time,
    duration,
    location,
    counter,
  })
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res, next) => {
  Event.find()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
