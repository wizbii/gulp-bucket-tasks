var argv = require('yargs').argv;
var bucket = require('gulp-bucket');
var scripts = require('./scripts');

module.exports = function (config) {
  bucket
    .options(argv)
  ;

  bucket
    .factory('scripts', scripts)
    .add(config.scripts)
  ;

  bucket
    .main(
      bucket.tasks('scripts')
    )
  ;
};
