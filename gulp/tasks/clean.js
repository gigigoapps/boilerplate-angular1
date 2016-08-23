'use strict';

const gulp      = require('gulp');
const clean     = require('gulp-clean');
const config    = require('../config');

gulp.task('clean', function () {
    return gulp.src(config.paths.dist)
    .pipe(clean());
});

gulp.task('clean-templates', function() {
    return gulp.src(config.paths.src+'/app/templates.js')
    .pipe(clean());
})
