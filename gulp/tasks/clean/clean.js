'use strict';

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
// https://www.npmjs.com/package/del

var gulp = require('gulp');
var del = require('del');
var config = require('./config').clean;

gulp.task('clean', ['clean:release', 'clean:dist']);

gulp.task('clean:release', function () {
  del(config.release, {dot: true});
});

gulp.task('clean:dist', function () {
  del(config.dist, {dot: true});
});
