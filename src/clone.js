// http://jsperf.com/cloning-an-object/2
'use strict'

exports = module.exports = function clone (obj) {
  var target = {}
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      target[i] = obj[i]
    }
  }
  return target
}
