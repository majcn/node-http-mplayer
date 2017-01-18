const express = require('express');
const router = express.Router();

router.get('/:group/:id', (req, res, next) => {
  let group = req.params.group;
  let id = req.params.id;

  let sGroup = req.malinca.stations[group] || {};
  let station = sGroup[id] || {};
  if (!('url' in station)) {
    next();
    return;
  }

  req.malinca.player.loadStream(station.url);
  res.json(station);
});

module.exports = router;
