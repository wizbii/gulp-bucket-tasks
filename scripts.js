var gulp = require('gulp');
var bucket = require('gulp-bucket');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function (config, options) {
    return [
        function () {
            return gulp
                .src(config.files)
                .pipe(sourcemaps.init())
                .pipe(concat(config.output.file))
                .pipe(babel({ presets: ['es2015'], compact: true, comments: false }))
                .pipe(uglify())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest(config.output.path))
            ;
        }
    ];
};
