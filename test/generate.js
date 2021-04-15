import { expect } from 'chai'
import generate from '../index.js'
import hexRgb from 'hex-rgb'

describe('generate', function () {
  it('should return same hex when same string provided', function () {
    const hex = generate('test')
    const hex2 = generate('test')
    expect(hex).to.equal(hex2)
  })

  it('should return not same hex when same string provided', function () {
    const hex = generate('test')
    const hex2 = generate('test2')
    expect(hex).to.not.equal(hex2)
  })

  it('should return more reddish color', function () {
    const hex = generate('i am a red fox')
    const rgb = hexRgb(hex, { format: 'array' })
    expect(rgb[0]).to.be.above(rgb[1])
    expect(rgb[0]).to.be.above(rgb[2])
  })

  it('should mix multiple color names with text', function () {
    const hex = generate('red green blue')
    expect(hex).to.be.equal('#5b5a65')
  })

  it('should put the # at the beginning of the color', function () {
    const hex = generate('red green blue')
    expect(hex.charAt(0)).to.be.equal('#')
  })

  it('should return color for yellow doge', function () {
    const hex = generate('yellow doge')
    expect(hex).to.be.equal('#f9c325')
  })
})

describe('generateAny', function () {
  it('should return color from undefined', function () {
    const hex = generate(undefined)
    expect(hex).to.exist
  })

  it('should return color from null', function () {
    const hex = generate(null)
    expect(hex).to.exist
  })

  it('should return color from any object', function () {
    const obj = { test: { test: 'test' }, test2: 'test2' }
    const hex = generate(obj)
    expect(hex).to.exist
  })

  it('should return a different hex when different objects are provided', function () {
    const hex = generate({ test1: { test1b: 'test_1b' }, test2: 'test2' })
    const hex2 = generate({ test3: { test3b: 'test_3b' }, test4: 'test4' })
    expect(hex).to.not.be.equal(hex2)
  })

  it('should return same hex when same string provided', function () {
    const hex = generate('test')
    const hex2 = generate('test')
    expect(hex).to.be.equal(hex2)
  })

  it('should return not same hex when different strings are provided', function () {
    const hex = generate('test')
    const hex2 = generate('test2')
    expect(hex).to.not.be.equal(hex2)
  })
})
