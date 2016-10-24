var gulp = require('gulp');

module.exports = function (config) {
  return [
    config.deps || [],
    function () {
      return gulp.watch(
        config.src,
        [].concat(config.tasks)
      );
    }
  ];
};
