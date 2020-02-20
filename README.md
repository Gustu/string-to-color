# String to color

![Alt text](/assets/img.png?raw=true "Sample")

[![npm version](https://badge.fury.io/js/string-to-color.svg)](https://badge.fury.io/js/string-to-color) ![](https://img.shields.io/npm/dm/string-to-color.svg)

Generate time invariant color from any string or any object.

## Install

```bash
npm install string-to-color
```
```bash
yarn add string-to-color
```

## Demo

https://gustu.github.io/string-to-color/

## Usage

```js
const stc = require('string-to-color');
const color = stc('string'); // => "#7f1de4"
```


or just generate color from any object, even null!

```js
const color = stc(null); // => "#1ad64b"
```

Another feature is that when your string contains color name, output will more or less equal to that color

```js
const color = stc("i am a red fox"); // => "#f03d22"
```

When multiple colors are provided, they will be mixed with each other

```js
const color = stc("red green blue"); // => "#7f5b78"
```

## License

MIT.
