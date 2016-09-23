function json() {
  return (req, res, next) => {
    res.json = function(obj) {
      this.writeHead(200, {'Content-Type': 'application/json'})
      this.end(JSON.stringify(obj))
    }
    next()
  }
}

module.exports = { json }