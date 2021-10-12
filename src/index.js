function Rack () {
  this.balls = []
}

Rack.prototype.add = function (number) {
  this.balls.push(number)
  this.balls.sort((a, b) => a - b)

  return this.balls
}

module.exports = Rack
