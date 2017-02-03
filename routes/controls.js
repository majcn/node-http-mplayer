const express = require('express');
const router = express.Router();

router.get('/volume/:value(1?[0-9]?[0-9])', (req, res, next) => {
  let volume = req.params.value;

  req.malinca.player.volume(volume);

  res.json(volume);
});

router.get('/next', (req, res, next) => {
  req.malinca.player.next();

  res.json("next");
});

module.exports = router;
