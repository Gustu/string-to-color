import toHex  from 'colornames'
import words from 'lodash.words'
import trimStart from 'lodash.trimstart'
import padEnd from 'lodash.padend'
import rgbHex from 'rgb-hex'
import hexRgb from 'hex-rgb'

const MIXED_WEIGHT = 0.75
const TEXT_WEIGHT = 0.25
const SEED = 16777215
const FACTOR = 49979693

export default function (object) {
  return '#' + generateColor(String(JSON.stringify(object)))
};

function getColors (text) {
  const _words = words(text)
  const colors = _words
    .map((word) => toHex(word))
    .filter(Boolean)
    .map(color => trimStart(color, '#'))
    .map(hexa => hexRgb(hexa, { format: 'array' }))
  return colors
}

function mixColors (colors) {
  const mixed = [0, 0, 0]
  colors.forEach((value) => {
    mixed[0] += value[0]
    mixed[1] += value[1]
    mixed[2] += value[2]
  })
  return mixed.map(value => value / colors.length);
}

function generateColor (text) {
  let mixed
  const colors = getColors(text)
  if (colors.length) mixed = mixColors(colors)
  let b = 1
  let d = 0
  let f = 1

  text.split('').map(letter => letter.charCodeAt(0))
  .forEach(letter => {
    letter > d && (d = letter), 
    (f = parseInt(SEED / d)), 
    (b = (b + letter * f * FACTOR) % SEED)
  })

  let hex = ((b * text.length) % SEED).toString(16)
  hex = padEnd(hex, 6, hex)
  const rgb = hexRgb(hex, { format: 'array' })
  if (mixed) {
    return rgbHex(
      TEXT_WEIGHT * rgb[0] + MIXED_WEIGHT * mixed[0],
      TEXT_WEIGHT * rgb[1] + MIXED_WEIGHT * mixed[1],
      TEXT_WEIGHT * rgb[2] + MIXED_WEIGHT * mixed[2]
    )
  }
  return hex
}
