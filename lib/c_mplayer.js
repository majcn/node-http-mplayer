const fs = require('fs')

function getCommands() {
  return {
    'volume': (player, value) => player.volume(value)
  }
}

module.exports = function(url, player) {
  let commands = getCommands()

  return (req, res, next) => {
    let command_url = req.url.replace(`${url}/`, '')
    let [ , command_str, value ] = command_url.match(/^(\w+)\/(\d+)$/) || []
    let command = commands[command_str]
    if (command) {
      command(player, value)
      res.json(player.status)
    }

    next()
  }
}
