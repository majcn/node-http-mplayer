const Router = require('koa-router');
const router = new Router();

router.get('/:id', async ctx => {
  let id = ctx.params.id;

  let mpvPlayer = ctx.malinca.player;

  let inputPath = `ytdl://${id}`;
  mpvPlayer.load(inputPath);

  const startedEventPromise = new Promise(resolve => mpvPlayer.once('started', resolve))
  await startedEventPromise

  let outputPath = await mpvPlayer.getProperty('path');
  if (inputPath !== outputPath) {
    return ctx.throw(500, 'Path does not match');
  }

  let title = await mpvPlayer.getProperty('media-title');
  ctx.body = { id, title };
});

module.exports = router;
