var getPath = require('object-path-get');
var obj = { foo: { bar: 'baz' } };
var r1 = getPath(obj, 'foo.bar'); // result: "baz"
console.log('r1:', r1);
var r2 = getPath(obj, 'foo.invalidKey', 'cool'); // result: "cool"
console.log('r2:', r2);
var r3 = getPath(obj, 'foo|bar', null, '|'); // result: "baz" (with different delimiter)
console.log('r3:', r3);
var r4 = getPath(obj, ['foo', 'bar']); // result "baz" (with array path)
console.log('r4:', r4);
