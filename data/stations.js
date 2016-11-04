const path = require('path');
const fs = require('fs');

function getStations() {
  let stations = {};

  const STATIONS_FOLDER = path.join(__dirname, 'stations');
  for (let file of fs.readdirSync(STATIONS_FOLDER)) {
    let station = JSON.parse(fs.readFileSync(`${STATIONS_FOLDER}/${file}`, 'utf8'));
    stations[station.prefix] = {};
    for (let s of station.data) {
      stations[station.prefix][s.id] = s;
    }
  }

  return stations;
}

module.exports = getStations;
