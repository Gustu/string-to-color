var should = require('chai').should();
var _ = require('../index');
var rgbHex = require('rgb-hex');
var hexRgb = require('hex-rgb');

describe('generate', function () {
    it('should return same hex when same string provided', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when same string provided', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test2");
        hex.should.not.be.equal(hex2);
    });

    it('should differ when using different seeds', function () {
        var hex = _.generate("test", 123);
        var hex2 = _.generate("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return more reddish color', function () {
        var hex = _.generate("i am a red fox");
        var rgb = hexRgb(hex);
        rgb[0].should.be.above(rgb[1]);
        rgb[0].should.be.above(rgb[2]);
    });

    it('should mix multiple color names with text', function () {
        var hex = _.generate("red green blue");
        hex.should.not.be.equal(rgbHex(255 / 3, 128 / 3, 255 / 3));
    });

    it('should return different hex when using different factors', function () {
        var hex = _.generate("test", 123);
        var hex2 = _.generate("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should generate hex when provided seed and factor', function () {
        var hex = _.generate("test", 123, 123);
        should.exist(hex);
    });

    it('should generate 6 hex chars when seed is too low', function () {
        var hex = _.generate("test", 1);
        hex.length.should.be.equal(6);
    });
});
describe('generateAny', function () {

    it('should return color from undefined', function () {
        var hex = _.generate(undefined);
        should.exist(hex);
    });

    it('should return color from null', function () {
        var hex = _.generate(null);
        should.exist(hex);
    });

    it('should return color from any object', function () {
        var obj = {test: {test: 'test'}, test2: 'test2'};
        var hex = _.generate(obj);
        should.exist(hex);
    });

    it('should return a different hex when different objects are provided', function () {
        var hex = _.generate({ test1: { test1b: 'test_1b' }, test2: 'test2' });
        var hex2 = _.generate({ test3: { test3b: 'test_3b' }, test4: 'test4' });
        hex.should.not.be.equal(hex2);
    });

    it('should return same hex when same string provided', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when same string provided', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test2");
        hex.should.not.be.equal(hex2);
    });

    it('should differ when using different seeds', function () {
        var hex = _.generate("test", 123);
        var hex2 = _.generate("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return different hex when using different factors', function () {
        var hex = _.generate("test", 123);
        var hex2 = _.generate("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return same value as generate', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test");
        hex.should.be.equal(hex2);
    });

    it('should generate hex when provided seed and factor', function () {
        var hex = _.generate("test", 123, 123);
        should.exist(hex);
    });
});