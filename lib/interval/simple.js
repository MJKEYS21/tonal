var parse = require('./parse')

/**
 * Simplify an interval
 *
 * @param {String} interval - the interval to be simplified
 * @param {boolean} ascending - (optional) if true, the simplified interval will
 * be always ascending
 *
 * @example
 * simple('M9') // => 'M2'
 * simple('M-9') // => 'M-2'
 * simple('M-9', true) // => 'M2'
 *
 * @module interval
 */
function simple (interval, ascending) {
  var i = parse(interval)
  var num = i.num === 8 ? 8 : i.generic + 1
  var dir = (ascending || i.dir === 1) ? '' : '-'
  return i.quality + dir + num
}

module.exports = simple