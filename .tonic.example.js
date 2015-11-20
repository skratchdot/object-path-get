var getPath = require('object-path-get');
var obj = {foo:{bar:'baz'}};
var r1 = getPath(obj, 'foo.bar'); // result: "baz"
var r2 = getPath(obj, 'foo.invalidKey', 'cool'); // result: "cool"
var r3 = getPath(obj, 'foo|bar', null, '|'); // result: "baz" (with different delimiter)
console.log(r1, r2, r3);
