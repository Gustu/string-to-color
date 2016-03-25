module.exports = {
    /**
     * Generates hex color from text.
     *
     * @param   {String} text
     * @param   {Number} seed Starting seed (optional)
     * @param   {Number} factor Scale of color changes (optional)
     * @return  {String} hexColor
     */
    generate: function (text) {
        return generateColor(text, null, null);
    },
    generate: function (text, seed) {
        return generateColor(text, seed, null);
    },
    generate: function (text, seed, factor) {
        return generateColor(text, seed, factor);
    },
    generateFromAny: function (any) {
        return generateColor(String(any));
    }
};

function generateColor(text, seed, factor) {
    if(!text)
        return null;

    var b = 0;
    var d = 0;
    var splitted = text.split('');
    var f = 1;
    seed = seed || 16777215;
    factor = factor || 49979693;

    if (text.length > 0) {
        for (var i = 0; i < splitted.length; i++)
            splitted[i].charCodeAt(0) > d && (d = splitted[i].charCodeAt(0)), f = parseInt(seed / d),
                b = (b + splitted[i].charCodeAt(0) * f * factor) % seed;
    }
    var hex = (b * splitted.length % seed).toString(16);
    if (hex.length < 6) {
        hex = hex + hex.substring(0, 6 - hex.length);
    }
    return hex;
}