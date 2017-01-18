const express = require('express');
const router = express.Router();

var youtubedl = require('youtube-dl');

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  youtubedl.getInfo(id, (err, info) => {
    if (err) {
      next();
      return;
    }

    let format = info.formats
      .filter((f) => f.ext === 'm4a')
      .sort((a,b) => parseInt(a.format_id, 10) > parseInt(b.format_id, 10))
      .pop()

    if (!format) {
      next();
      return;
    }

    req.malinca.player.loadStream(format.url);
    res.json(format);
  })
});

module.exports = router;
