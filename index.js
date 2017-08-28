var toHex = require('colornames');
var _ = require('lodash');
var rgbHex = require('rgb-hex');
var hexRgb = require('hex-rgb');

const MIXED_WEIGHT = 0.75;
const TEXT_WEIGHT = 0.25;
const SEED = 16777215;
const FACTOR = 49979693;

module.exports = {
    /**
     * Generates hex color from object.
     *
     * @param   {String} object
     * @return  {String} hexColor
     */
    generate: function (object) {
        return generateColor(String(JSON.stringify(object)));
    },
    /**
     * Generates hex color from object.
     *
     * @param   {String} object
     * @param   {Number} seed Starting seed - optional
     * @return  {String} hexColor
     */
    generate: function (object, seed) {
        return generateColor(String(JSON.stringify(object)), seed);
    },
    /**
     * Generates hex color from object.
     *
     * @param   {String} object
     * @param   {Number} seed Starting seed - optional
     * @param   {Number} factor Scale of color changes - optional
     * @return  {String} hexColor
     */
    generate: function (object, seed, factor) {
        return generateColor(String(JSON.stringify(object)), seed, factor);
    }
};

function getColors(text) {
    var words = _.words(text);
    var colors = [];
    _(words).forEach(function (word) {
        var color = toHex(word);
        if (color)
            colors.push(hexRgb(_.trimStart(color, '#')));
    });
    return colors;
}

function mixColors(colors) {
    var mixed = [0, 0, 0];
    _(colors).forEach(function (value) {
        for (var i = 0; i < 3; i++) mixed[i] += value[i];
    });
    return [mixed[0] / colors.length, mixed[1] / colors.length, mixed[2] / colors.length];
}

function generateColor(text, seed, factor) {
    var mixed;
    var colors = getColors(text);
    if (colors.length > 0) mixed = mixColors(colors);
    var b = 1;
    var d = 0;
    var f = 1;
    seed = seed || SEED;
    factor = factor || FACTOR;
    if (text.length > 0) {
        for (var i = 0; i < text.length; i++)
            text[i].charCodeAt(0) > d && (d = text[i].charCodeAt(0)), f = parseInt(seed / d),
                b = (b + text[i].charCodeAt(0) * f * factor) % seed;
    }
    var hex = (b * text.length % seed).toString(16);
    hex = _.padEnd(hex, 6, hex);
    var rgb = hexRgb(hex);
    if(mixed)
        return rgbHex(TEXT_WEIGHT * rgb[0] + MIXED_WEIGHT * mixed[0], TEXT_WEIGHT * rgb[1] + MIXED_WEIGHT * mixed[1],
            TEXT_WEIGHT * rgb[2] + MIXED_WEIGHT * mixed[2]);
    return hex;
}
