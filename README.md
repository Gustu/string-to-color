# String to color

![Alt text](/assets/img.png?raw=true "Sample")

[![npm version](https://badge.fury.io/js/string-to-color.svg)](https://badge.fury.io/js/string-to-color) ![](https://img.shields.io/npm/dm/string-to-color.svg)

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
var hex = _.generate('string', 1234, 1234); // => "000000"
```

or just generate color from any object, even null!

```js
var hex = _.generate(null); // => "1ad64b"
```

Another feature is that when your string contains color name, output will more or less equal to that color

```js
var hex = _.generate("i am a red fox"); // => "f03d22"
```

When multiple colors are provided, they will be mixed with each other

```js
var hex = _.generate("red green blue"); // => "7f5b78"
```


## API

Seed and Factor can be null.

* ```generate(text)```
* ```generate(text, seed)```
* ```generate(text, seed, factor)```


## License

MIT.
