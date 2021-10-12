const Rack = require('../src/index')
var assert = require('assert')

describe('main.js', function() {
    it('should return empty array if not balls added', function() {
      const rack = new Rack
      assert.deepEqual([], rack.balls)
    })
    it('should return a single value', function() {
      const rack = new Rack
      rack.add(20)
      assert.deepEqual([20], rack.balls)
    })
    it('should return sorted values when added', function() {
      const rack = new Rack
      rack.add(20)
      rack.add(10)
      assert.deepEqual([10, 20], rack.balls)
    })
    it('should sort all new values', function() {
      const rack = new Rack
      assert.deepEqual([], rack.balls)
      rack.add(20)
      assert.deepEqual([20], rack.balls)
      rack.add(10)
      assert.deepEqual([10, 20], rack.balls)
      rack.add(30)
      assert.deepEqual([10, 20, 30], rack.balls)
    })
    it('should sort lots of balls', function() {
      const rack = new Rack
      rack.add(44)
      rack.add(21)
      rack.add(53)
      rack.add(34)
      rack.add(24)
      rack.add(12)
      rack.add(8)
      rack.add(21)
      assert.deepEqual([8, 12, 21,  21,  24,  34,  44,  53], rack.balls)
    })
});
