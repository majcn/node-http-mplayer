const Router = require('koa-router');
const router = new Router();

router.get('/volume/:value(1?[0-9]?[0-9])', async ctx => {
  let volume = ctx.params.value;

  ctx.malinca.player.volume(volume);

  ctx.body = volume
});

router.get('/next', async ctx => {
  ctx.malinca.player.next();

  let title = await ctx.malinca.player.getProperty('media-title')
  ctx.body = title
});

module.exports = router;
