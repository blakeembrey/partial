/* global describe, it */

var assert  = require('assert');
var partial = require('./');

describe('partial', function () {
  it('should accept proxy the remaining number of arguments', function () {
    var twoArgs = function (a, b) { return arguments.length; };

    assert.equal(partial(twoArgs).length, 2);
    assert.equal(partial(twoArgs, 'a').length, 1);
    assert.equal(partial(twoArgs, 'a', 'b').length, 0);

    // Check calling the function still works.
    assert.equal(partial(twoArgs, 'a', 'b', 'c')('d'), 4);
  });

  it('should not fail when there are more arguments then defined', function () {
    var fn = function () { return arguments.length; };

    assert.equal(partial(fn, 'a', 'b', 'c').length, 0);

    // Check calling the function still works.
    assert.equal(partial(fn, 'a', 'b')('c', 'd'), 4);
  });

  it('should return the result when called', function () {
    var add = function (a, b) {
      return a + b;
    };

    assert.equal(partial(add)(1, 2), 3);
    assert.equal(partial(add, 1)(2), 3);
    assert.equal(partial(add, 1, 2)(), 3);
  });
});
