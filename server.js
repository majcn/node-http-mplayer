const path = require('path');

const send = require('koa-send');
const Router = require('koa-router');
const Koa = require('koa');
const app = new Koa();
const router = new Router();

// Custom entries
const stations = require('./data/stations')();
const mpv = require('node-mpv')
const player = new mpv({ "audio_only": true })
player.volume(100);
player.load('http://live.radio1.si/Radio1');

app.use(async (ctx, next) => {
  ctx.malinca = { player, stations }
  await next()
})

router.use('/radio',    require('./routes/radio').routes());
router.use('/stations', require('./routes/stations').routes());
router.use('/youtube',  require('./routes/youtube').routes());
router.use('/controls', require('./routes/controls').routes());

app.use(router.routes());

app.use(async ctx => {
  try {
    await send(ctx, ctx.path, { index: 'index.html', root: path.join(__dirname, 'client/build/') });
  } catch (e) {
    await send(ctx, '/', { index: 'index.html', root: path.join(__dirname, 'client/build/') });
  }
})

app.listen(process.env.PORT || 3001);
