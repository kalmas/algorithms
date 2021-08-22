const Benchmark = require('benchmark');
const climbStairs = require('./climbing-stairs').climbStairs;
const climbStairsLoop = require('./climbing-stairs').climbStairsLoop;
const resetCache = require('./climbing-stairs').resetCache;

const suite = new Benchmark.Suite;

// add tests
suite.add('recursive', function() {
  resetCache();
  climbStairs(1000);
}).add('loop', function() {
  resetCache();
  climbStairsLoop(1000);
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();
