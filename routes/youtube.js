const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  req.malinca.player.loadStream(`ytdl://${id}`);

  req.malinca.player.getProperty("media-title")
    .then(title => req.json(title))
    .catch(next);
});

module.exports = router;
