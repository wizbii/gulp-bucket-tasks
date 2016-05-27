var rimraf = require('rimraf');

module.exports = function (config, options) {
  return [
    function (callback) {
      rimraf(config.files, callback);
    }
  ];
};
