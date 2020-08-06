var should = require('chai').should();
var generate = require('../index');
var hexRgb = require('hex-rgb');

describe('generate', function () {
    it('should return same hex when same string provided', function () {
        var hex = generate("test");
        var hex2 = generate("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when same string provided', function () {
        var hex = generate("test");
        var hex2 = generate("test2");
        hex.should.not.be.equal(hex2);
    });

    it('should return more reddish color', function () {
        var hex = generate("i am a red fox");
        var rgb = hexRgb(hex, {format: 'array'});
        rgb[0].should.be.above(rgb[1]);
        rgb[0].should.be.above(rgb[2]);
    });

    it('should mix multiple color names with text', function () {
        var hex = generate("red green blue");
        hex.should.be.equal("#5b5a65");
    });

    it('should put the # at the beginning of the color', function () {
        var hex = generate("red green blue");
        hex.charAt(0).should.be.equal('#');
    });

    it('should return color for yellow doge', function () {
        var hex = generate("yellow doge");
        console.log(hex);
        hex.should.be.equal("#f9c325");
    })
});

describe('generateAny', function () {

    it('should return color from undefined', function () {
        var hex = generate(undefined);
        should.exist(hex);
    });

    it('should return color from null', function () {
        var hex = generate(null);
        should.exist(hex);
    });

    it('should return color from any object', function () {
        var obj = {test: {test: 'test'}, test2: 'test2'};
        var hex = generate(obj);
        should.exist(hex);
    });

    it('should return a different hex when different objects are provided', function () {
        var hex = generate({test1: {test1b: 'test_1b'}, test2: 'test2'});
        var hex2 = generate({test3: {test3b: 'test_3b'}, test4: 'test4'});
        hex.should.not.be.equal(hex2);
    });

    it('should return same hex when same string provided', function () {
        var hex = generate("test");
        var hex2 = generate("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when different strings are provided', function () {
        var hex = generate("test");
        var hex2 = generate("test2");
        hex.should.not.be.equal(hex2);
    });

});
