var should = require('chai').should();
var _ = require('../index');

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

    it('should return null on null text', function () {
        var hex = _.generate(null);
        should.not.exist(hex);
    });
});
describe('generateAny', function () {
    it('should return color from null', function () {
        var hex = _.generateFromAny(null);
        should.exist(hex);
    });

    it('should return color from any object', function () {
        var obj = {test: {test: 'test'}, test2: 'test2'};
        var hex = _.generateFromAny(obj);
        should.exist(hex);
    });

    it('should return same hex when same string provided', function () {
        var hex = _.generateFromAny("test");
        var hex2 = _.generateFromAny("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when same string provided', function () {
        var hex = _.generateFromAny("test");
        var hex2 = _.generateFromAny("test2");
        hex.should.not.be.equal(hex2);
    });

    it('should differ when using different seeds', function () {
        var hex = _.generateFromAny("test", 123);
        var hex2 = _.generateFromAny("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return same value as generate', function () {
        var hex = _.generateFromAny("test");
        var hex2 = _.generate("test");
        hex.should.be.equal(hex2);
    });
});