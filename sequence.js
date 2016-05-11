var runSequence = require('run-sequence');

module.exports = function (config, options) {
  return [
    function (callback) {
      var seq = config.sequence.concat(callback);
      runSequence.apply(null, seq);
    }
  ];
};

module.exports.use = function (gulp) {
  runSequence = runSequence.use(gulp);
  return module.exports;
};
