var toHex = require('colornames');
var _ = require('lodash');

module.exports = {
    /**
     * Generates hex color from text.
     *
     * @param   {String} text
     * @return  {String} hexColor
     */
    generate: function (text) {
        return generateColor(text, null, null);
    },
    /**
     * Generates hex color from text.
     *
     * @param   {String} text
     * @param   {Number} seed Starting seed
     * @return  {String} hexColor
     */
    generateWithSeed: function (text, seed) {
        return generateColor(text, seed, null);
    },
    /**
     * Generates hex color from text.
     *
     * @param   {String} text
     * @param   {Number} factor Scale of color changes
     * @return  {String} hexColor
     */
    generateWithFactor: function (text, factor) {
        return generateColor(text, null, factor);
    },
    /**
     * Generates hex color from text.
     *
     * @param   {String} text
     * @param   {Number} seed Starting seed
     * @param   {Number} factor Scale of color changes
     * @return  {String} hexColor
     */
    generateWithSeedFactor: function (text, seed, factor) {
        return generateColor(text, seed, factor);
    },
    /**
     * Generates hex color from any object.
     *
     * @param   {Object} any
     * @return  {String} hexColor
     */
    generateAny: function (any) {
        return generateColor(String(any), null, null);
    },
    /**
     * Generates hex color from any object.
     *
     * @param   {Object} any
     * @param   {Number} seed Starting seed
     * @return  {String} hexColor
     */
    generateAnyWithSeed: function (any, seed) {
        return generateColor(String(any), seed, null);
    },
    /**
     * Generates hex color from any object.
     *
     * @param   {Object} any
     * @param   {Number} factor Scale of color changes
     * @return  {String} hexColor
     */
    generateAnyWithFactor: function (any, factor) {
        return generateColor(String(any), null, factor);
    },
    /**
     * Generates hex color from any object.
     *
     * @param   {Object} any
     * @param   {Number} seed Starting seed
     * @param   {Number} factor Scale of color changes
     * @return  {String} hexColor
     */
    generateAnyWithSeedFactor: function (any, seed, factor) {
        return generateColor(String(any), seed, factor);
    }
};

function getFirstColor(text) {
    var words = _.words(text);
    var color;
    for(var i in words) {
        color = toHex(words[i]);
        if (color) break;
    }
    return color;
}

function generateColor(text, seed, factor) {
    if(!text) return null;

    var color = getFirstColor(text);
    if(color) return _.trimStart(color, '#');

    var b = 1;
    var d = 0;
    var f = 1;
    seed = seed || 16777215;
    factor = factor || 49979693;

    if (text.length > 0) {
        for (var i = 0; i < text.length; i++)
            text[i].charCodeAt(0) > d && (d = text[i].charCodeAt(0)), f = parseInt(seed / d),
                b = (b + text[i].charCodeAt(0) * f * factor) % seed;
    }
    var hex = (b * text.length % seed).toString(16);
    return _.padEnd(hex, 6, hex);
}