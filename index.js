'use strict';

module.exports = function () {
  var GandhiSaid = require('./quotes.json')
  ,quote = GandhiSaid[Math.floor(Math.random() * GandhiSaid.length)];
  return '"' + quote + '"' + ' -- Mahatma Gandhi.'
}
