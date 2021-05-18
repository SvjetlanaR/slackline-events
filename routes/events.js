const router = require("express").Router();
const Event = require("../models/Event");

router.post("/", (req, res, next) => {
  const { title, date, description, equipment, time, duration, location, counter, userEmail, join} =
    req.body;
    console.log('foobar', req.user);
    
  Event.create({
    creator: req.session.passport.user,
    title,
    description,
    equipment,
    date,
    time,
    duration,
    location,
    counter,
    userEmail,
    join
  })
    .then((event) => {
      console.log(event)
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

router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => {
      if (!event) {
        res.status(404).json(event);
      } else {
        res.status(200).json(event);
      }
    })
});

router.put('/:id', (req, res, next) => {
  const { title, description, date, time, join } = req.body;
  Event.findByIdAndUpdate(
    req.params.id,
    { title, description, date, time, join },
    { new: true }
  )
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => res.json(err));
});



router.delete('/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'event deleted' });
    })
})

module.exports = router;
