const http = require('http')
const connect = require('connect')
const MPlayer = require('mplayer')

const c_util = require('./lib/c_util.js')
const c_mplayer = require('./lib/c_mplayer.js')
const c_radio = require('./lib/c_radio.js')

var player = new MPlayer()

var app = connect()
app.use(c_util.json())
app.use(c_mplayer('/player', player))
app.use(c_radio('/radio', player))

const PORT = 8080
http.createServer(app).listen(PORT)
