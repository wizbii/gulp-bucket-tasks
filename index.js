module.exports = function (bucket) {
  var argv =
    require('yargs')
      .alias('b', 'build')
      .alias('l', 'lint')
      .argv
    ;

  bucket.options(argv);
};
