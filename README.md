# object-path-get

[![NPM version](https://badge.fury.io/js/object-path-get.svg)](http://badge.fury.io/js/object-path-get)
[![Build Status](https://travis-ci.org/skratchdot/object-path-get.png?branch=master)](https://travis-ci.org/skratchdot/object-path-get)
[![Code Climate](https://codeclimate.com/github/skratchdot/object-path-get.png)](https://codeclimate.com/github/skratchdot/object-path-get)
[![Coverage Status](https://coveralls.io/repos/skratchdot/object-path-get/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/object-path-get?branch=master)
[![Dependency Status](https://david-dm.org/skratchdot/object-path-get.svg)](https://david-dm.org/skratchdot/object-path-get)
[![devDependency Status](https://david-dm.org/skratchdot/object-path-get/dev-status.svg)](https://david-dm.org/skratchdot/object-path-get#info=devDependencies)

[![NPM](https://nodei.co/npm/object-path-get.png)](https://npmjs.org/package/object-path-get)

## Description

get values from javascript objects by specifying a path.

by using this library, you can help prevent the following error from occurring:

```
Cannot read property 'foo' of undefined
```

NOTE: I've re-written / used this function so many different times, I decided to publish it
as a module.

## Getting Started

Install the module with: `npm install --save object-path-get`

```javascript
var getPath = require('object-path-get');
var obj = { foo: { bar: 'baz' } };
getPath(obj, 'foo.bar'); // result: "baz"
getPath(obj, 'foo.invalidKey', 'cool'); // result: "cool"
getPath(obj, 'foo|bar', null, '|'); // result: "baz" (with different delimiter)
getPath(obj, ['foo', 'bar']); // result "baz" (with array path)
```

## Links

- [Source Code](https://github.com/skratchdot/object-path-get)
- [Changelog](https://github.com/skratchdot/object-path-get/blob/master/CHANGELOG.md)
- [Live example on Runkit](https://npm.runkit.com/object-path-get)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/434470?v=4" width="100px;"/><br /><sub><b>◬</b></sub>](https://www.skratchdot.com/)<br />[💻](https://github.com/skratchdot/object-path-get/commits?author=skratchdot "Code") [📖](https://github.com/skratchdot/object-path-get/commits?author=skratchdot "Documentation") [💡](#example-skratchdot "Examples") | [<img src="https://avatars0.githubusercontent.com/u/7457?v=4" width="100px;"/><br /><sub><b>danigb</b></sub>](https://github.com/danigb)<br />[💻](https://github.com/skratchdot/object-path-get/commits?author=danigb "Code") |
| :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
