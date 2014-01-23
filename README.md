# Partial

Partially apply a function by pre-filling a number of its arguments and without changing its `this` value.

## Installation

```
npm install blakeembrey/partial --save
```

## Usage

```javascript
var partial = require('partial');

var add = function (a, b) {
  return a + b;
};

var add5 = partial(add, 5);

add5(10); //=> 15
add5(20); //=> 25
add5(30); //=> 35
```

## License

MIT
