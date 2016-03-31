# String to color

[![npm version](https://badge.fury.io/js/string-to-color.svg)](https://badge.fury.io/js/string-to-color)

Generate time invariant color from any string or any object.

## Install

```bash
npm install string-to-color
```

## Usage

```js
var hex = _.generate('string'); // => "7f1de4"
```

or you can use your own seed and factor (both are optional)

```js
var hex = _.generateWithSeedFactor('string', 1234, 1234); // => "000000"
```

or just generate color from any object, even null!

```js
var hex = _.generateAny(null); // => "1ad64b"
```

Another feature is that when your string contains color name output will be equal to that color

```js
var hex = _.generate("i am a red fox"); // => "FF0000"
```


## API

* ```generate(text)```
* ```generateWithSeed(text, seed)```
* ```generateWithFactor(text, factor)```
* ```generateWithSeedFactor(text, seed, factor)```
* ```generateAny(any)```
* ```generateAnyWithSeed(any, seed)```
* ```generateAnyWithFactor(any, factor)```
* ```generateAnyWithSeedFactor(any, seed, factor)```

## License

MIT.
