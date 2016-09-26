'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config');

gulp.task('imagemin', function () {
  return gulp.src(config.paths.imagesDest + '**/*')
    .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(config.paths.imagesDest));
});
