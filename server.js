const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

// Custom entries
const stations = require('./data/stations')();
const MPlayer = require('mplayer');
const player = new MPlayer();
player.volume(100);
player.openFile('http://live.radio1.si/Radio1');
app.use((req, res, next) => {
    req.malinca = {};
    req.malinca.player = player;
    req.malinca.stations = stations;
    next();
});

app.use('/radio',    require('./routes/radio'));
app.use('/stations', require('./routes/stations'));
app.use('/youtube',  require('./routes/youtube'));

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`)
});
