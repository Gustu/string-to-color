# String to color

[![npm version](https://badge.fury.io/js/string-to-color.svg)](https://badge.fury.io/js/string-to-color)

Generate time invariant color from any string or any object.

## Install

```bash
npm install string-to-color
```

## Usage

```js
var _ = require ('string-to-color');
var hex = _.generate('string');
```

or you can use your own seed and factor (both are optional)

```js
var _ = require ('string-to-color');
var hex = _.generate('string', 1234, 1234);
```

or just generate color from any object, even null!

```js
var _ = require ('string-to-color');
var hex = _.generateFromAny(null);
```

Ex. output

```js
generate('example');
//=> '659975'
```

## License

MIT.
