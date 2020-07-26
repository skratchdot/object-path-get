'use strict';
var getPath = require('./index.js');
var now = new Date();
var obj;
var getDefaultObject = function () {
  return {
    nested: {
      thing: {
        foo: 'bar'
      },
      is: {
        cool: true
      }
    },
    dataUndefined: undefined,
    dataDate: now,
    dataNumber: 42,
    dataString: 'foo',
    dataNull: null,
    dataBoolean: true
  };
};

describe('object-get-path', function () {
  beforeEach(function () {
    obj = getDefaultObject();
  });
  it('should return the correct types', function () {
    expect(getPath(obj, 'dataUndefined')).toBeUndefined();
    expect(typeof getPath(obj, 'dataDate')).toBe('object');
    expect(typeof getPath(obj, 'nested')).toBe('object');
    expect(typeof getPath(obj, 'nested.thing')).toBe('object');
    expect(typeof getPath(obj, 'nested.thing.foo')).toBe('string');
    expect(typeof getPath(obj, 'dataNumber')).toBe('number');
    expect(typeof getPath(obj, 'dataString')).toBe('string');
    expect(typeof getPath(obj, 'dataBoolean')).toBe('boolean');
  });
  it('should handle missing keys', function () {
    expect(getPath(obj, 'invalidKey', 'wow')).toBe('wow');
    expect(getPath(obj, 'invalidKey', null)).toBe(null);
    expect(getPath(obj, 'nested.invalidKey', 'nested')).toBe('nested');
    expect(getPath(obj, '', 'DEFAULT')).toBe('DEFAULT');
  });
  it('should handle alternative delimiters', function () {
    expect(getPath(obj, 'nested.is.cool', null, '.')).toBe(true);
    expect(getPath(obj, 'nested|is|cool', null, '|')).toBe(true);
    expect(getPath(obj, 'nested|is|cool', null, '.')).toBe(null);
    expect(getPath(obj, 'nested|is|cool', null)).toBe(null);
  });
  it('should return the correct values', function () {
    expect(getPath(obj, 'dataUndefined')).toBe(undefined);
    expect(getPath(obj, 'dataUndefined', 42)).toBe(undefined);
    expect(getPath(obj, 'dataDate')).toBe(now);
    expect(getPath(obj, 'dataNumber')).toBe(42);
    expect(getPath(obj, 'dataString')).toBe('foo');
    expect(getPath(obj, 'dataBoolean')).toBe(true);
  });
  it('should handle nested data', function () {
    expect(typeof getPath(obj, 'nested')).toBe('object');
    expect(getPath(obj, 'nested.thing.foo')).toBe('bar');
    expect(getPath(obj, 'nested.is.cool')).toBe(true);
  });
  it('should accept arrays as path', function () {
    // special use case
    expect(getPath(obj, [], 'DEFAULT')).toBe(obj);
    expect(getPath(obj, ['dataDate'])).toBe(now);
    expect(typeof getPath(obj, ['nested'])).toBe('object');
    expect(getPath(obj, ['nested', 'thing', 'foo'])).toBe('bar');
    expect(getPath(obj, ['nested', 'is', 'cool'])).toBe(true);
  });
  it('should handle invalid array paths', function () {
    expect(getPath(obj, [''], 'DEFAULT')).toBe('DEFAULT');
    expect(getPath(obj, ['invalid'], 'DEFAULT')).toBe('DEFAULT');
    expect(getPath(obj, ['nested', 'invalid'], 'DEFAULT')).toBe('DEFAULT');
  });
  it('should return the default value when key is not a string or array', function () {
    var defaultValue = Math.random();
    expect(getPath(obj, {}, defaultValue)).toBe(defaultValue);
    expect(getPath(obj, null, defaultValue)).toBe(defaultValue);
    expect(getPath(obj, 11, defaultValue)).toBe(defaultValue);
    expect(getPath(obj, undefined, defaultValue)).toBe(defaultValue);
  });
});
