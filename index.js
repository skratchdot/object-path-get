'use strict';

module.exports = exports = function(obj, path, defaultValue, delimiter) {
  if (typeof path === 'string') {
    path = path.split(delimiter || '.');
  }
  if (Array.isArray(path)) {
    var len = path.length;
    for (var i = 0; i < len; i++) {
      if (obj && (obj.hasOwnProperty(path[i]) || obj[path[i]])) {
        obj = obj[path[i]];
      } else {
        return defaultValue;
      }
    }
    return obj;
  } else {
    return defaultValue;
  }
};
