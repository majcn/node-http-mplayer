const Router = require('koa-router');
const router = new Router();

router.get('/:group/:id', async ctx => {
  let group = ctx.params.group;
  let id = ctx.params.id;

  let sGroup = ctx.malinca.stations[group] || {};
  let station = sGroup[id] || {};
  if ('url' in station) {
    ctx.malinca.player.load(station.url);
    ctx.body = station
  }
});

module.exports = router;
