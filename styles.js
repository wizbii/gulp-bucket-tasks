var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var revise = require('gulp-revise');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var sassVariables = require('gulp-sass-variables');

module.exports = function (config, options) {
  return [
    function () {
      return gulp
        .src(config.src)
        .pipe(sourcemaps.init())
        .pipe(gulpif(typeof process.env.ASSETS_BASE_URL === 'string', sassVariables({
          '$base-path': process.env.ASSETS_BASE_URL
        })))
        .pipe(sass({
          outputStyle: options.build
            ? 'compressed'
            : 'nested'
        }))
        .pipe(autoprefixer('last 3 version'))
        .pipe(
          options.isWatching
            ? revise.noop()
            : revise()
        )
        .pipe(sourcemaps.write())
        .pipe(revise.write(config.dest))
        .pipe(gulp.dest(config.dest));
    }
  ];
};
