const fs = require('fs')

function getStations() {
  let stations = {}

  const STATIONS_FOLDER = 'stations'
  for (let file of fs.readdirSync(STATIONS_FOLDER)) {
    let station = JSON.parse(fs.readFileSync(`${STATIONS_FOLDER}/${file}`, 'utf8'))
    for (let s of station.data) {
      stations[`${station.prefix}/${s.id}`] = s
    }
  }

  return stations;
}

module.exports = function(url, player) {
  let stations = getStations()

  return (req, res, next) => {
    let s_id = req.url.replace(`${url}/`, '')
    let station = stations[s_id]

    if (station) {
      player.openFile(station.url)
      res.json(stations[s_id])
    }

    next()
  }
}
