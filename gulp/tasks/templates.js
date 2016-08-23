const gulp          = require('gulp');
const ngHtml2Js     = require('gulp-ng-html2js');
const concat        = require('gulp-concat');
const config        = require('../config');
const error         = require('../error');

gulp.task('templates', ['clean-templates'], function () {
    return gulp.src([config.paths.src+'/app/**/*.html'])
        .pipe(ngHtml2Js({'moduleName': 'templates', declareModule : true, prefix: '/app/'}))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(config.paths.src+'/app/'))
        .on('error', error.handleError);
});
