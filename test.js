'use strict';
var expect = require('chai').expect;
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
		expect(getPath(obj, 'dataUndefined')).to.be.undefined;
		expect(getPath(obj, 'dataDate')).to.be.an.object;
		expect(getPath(obj, 'nested')).to.be.an.object;
		expect(getPath(obj, 'nested.thing')).to.an.object;
		expect(getPath(obj, 'nested.thing.foo')).to.be.a.string;
		expect(getPath(obj, 'dataNumber')).to.be.a.number;
		expect(getPath(obj, 'dataString')).to.be.a.string;
		expect(getPath(obj, 'dataBoolean')).to.be.a.boolean;
	});
	it('should handle missing keys', function () {
		expect(getPath(obj, 'invalidKey', 'wow')).to.equal('wow');
		expect(getPath(obj, 'invalidKey', null)).to.equal(null);
		expect(getPath(obj, 'nested.invalidKey', 'nested')).to.equal('nested');
		expect(getPath(obj, '', 'DEFAULT')).to.equal('DEFAULT');
	});
	it('should handle alternative delimiters', function () {
		expect(getPath(obj, 'nested.is.cool', null, '.')).to.equal(true);
		expect(getPath(obj, 'nested|is|cool', null, '|')).to.equal(true);
		expect(getPath(obj, 'nested|is|cool', null, '.')).to.equal(null);
		expect(getPath(obj, 'nested|is|cool', null)).to.equal(null);
	});
	it('should return the correct values', function () {
		expect(getPath(obj, 'dataUndefined')).to.equal(undefined);
		expect(getPath(obj, 'dataUndefined', 42)).to.equal(undefined);
		expect(getPath(obj, 'dataDate')).to.equal(now);
		expect(getPath(obj, 'dataNumber')).to.equal(42);
		expect(getPath(obj, 'dataString')).to.equal('foo');
		expect(getPath(obj, 'dataBoolean')).to.equal(true);
	});
	it('should handle nested data', function () {
		expect(getPath(obj, 'nested')).to.be.an.object;
		expect(getPath(obj, 'nested.thing.foo')).to.equal('bar');
		expect(getPath(obj, 'nested.is.cool')).to.equal(true);
	});
	it('should accept arrays as path', function () {
		// special use case
		expect(getPath(obj, [], 'DEFAULT')).to.equal(obj);
		expect(getPath(obj, ['dataDate'])).to.equal(now);
		expect(getPath(obj, ['nested'])).to.be.an.object;
		expect(getPath(obj, ['nested', 'thing', 'foo'])).to.equal('bar');
		expect(getPath(obj, ['nested', 'is', 'cool'])).to.equal(true);
	});
	it('should handle invalid array paths', function () {
		expect(getPath(obj, [''], 'DEFAULT')).to.equal('DEFAULT');
		expect(getPath(obj, ['invalid'], 'DEFAULT')).to.equal('DEFAULT');
		expect(getPath(obj, ['nested', 'invalid'], 'DEFAULT')).to.equal('DEFAULT');
	});
	it('should return the default value when key is not a string or array', function () {
		var defaultValue = Math.random();
		expect(getPath(obj, {}, defaultValue)).to.equal(defaultValue);
		expect(getPath(obj, null, defaultValue)).to.equal(defaultValue);
		expect(getPath(obj, 11, defaultValue)).to.equal(defaultValue);
		expect(getPath(obj, undefined, defaultValue)).to.equal(defaultValue);
	});
});
