const _ = require('lodash');

const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
  ctx.body = _.keys(ctx.malinca.stations);
});

router.get('/:group', async ctx => {
  let group = ctx.params.group;
  let sGroup = ctx.malinca.stations[group] || {};
  if (!_.isEmpty(sGroup)) {
  	ctx.body = _.values(sGroup);
  }
});

module.exports = router;
