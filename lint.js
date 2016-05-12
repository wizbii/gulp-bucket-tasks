var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function (config) {
  return [
    function () {
      return gulp
        .src(config.files)
        .pipe(eslint({ configFile: 'eslint.json' }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
      ;
    }
  ];
};
