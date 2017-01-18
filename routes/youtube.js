const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  req.malinca.player.loadStream(`ytdl://${id}`);
  res.json(format);
});

module.exports = router;
