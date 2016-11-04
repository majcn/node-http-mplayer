const _ = require('lodash');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(_.keys(req.malinca.stations));
});

router.get('/:group', (req, res, next) => {
  let group = req.params.group;
  let sGroup = req.malinca.stations[group] || {};
  if (_.isEmpty(sGroup)) {
    next();
    return;
  }

  res.json(_.values(sGroup));
});

module.exports = router;
