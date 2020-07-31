var toHex = require('colornames');
var _words = require('lodash.words');
var trimStart = require('lodash.trimstart');
var padEnd = require('lodash.padend');
var rgbHex = require('rgb-hex');
var hexRgb = require('hex-rgb');

const MIXED_WEIGHT = 0.75;
const TEXT_WEIGHT = 0.25;
const SEED = 16777215;
const FACTOR = 49979693;

module.exports = function(object) {
  return '#' + generateColor(String(JSON.stringify(object)));
};

function getColors(text) {
  var words = _words(text);
  var colors = [];
  words.forEach(function(word) {
    var color = toHex(word);
    if (color) colors.push(hexRgb(trimStart(color, '#'), {format: 'array'}));
  });
  return colors;
}

function mixColors(colors) {
  var mixed = [0, 0, 0];
  colors.forEach(function(value) {
    for (var i = 0; i < 3; i++) mixed[i] += value[i];
  });
  return [mixed[0] / colors.length, mixed[1] / colors.length, mixed[2] / colors.length];
}

function generateColor(text) {
  var mixed;
  var colors = getColors(text);
  if (colors.length > 0) mixed = mixColors(colors);
  var b = 1;
  var d = 0;
  var f = 1;
  if (text.length > 0) {
    for (var i = 0; i < text.length; i++)
      text[i].charCodeAt(0) > d && (d = text[i].charCodeAt(0)),
        (f = parseInt(SEED / d)),
        (b = (b + text[i].charCodeAt(0) * f * FACTOR) % SEED);
  }
  var hex = ((b * text.length) % SEED).toString(16);
  hex = padEnd(hex, 6, hex);
  var rgb = hexRgb(hex, {format: 'array'});
  if (mixed)
    return rgbHex(
      TEXT_WEIGHT * rgb[0] + MIXED_WEIGHT * mixed[0],
      TEXT_WEIGHT * rgb[1] + MIXED_WEIGHT * mixed[1],
      TEXT_WEIGHT * rgb[2] + MIXED_WEIGHT * mixed[2]
    );
  return hex;
}
