const gulp          = require('gulp');
const ngConstant    = require('gulp-ng-constant');
const rename        = require('gulp-rename');
const config        = require('../config');
const error         = require('../error');


gulp.task('constants', function (done) {

    var constants = config.parameters[config.environment].constants;

    var name = 'constants';
    return ngConstant({
        constants: constants,
        wrap: "(function() { 'use strict'; \n  <%= __ngModule %> \n\n})();",
        name: name,
        stream: true
    })
    .pipe(rename(name+'.js'))
    .pipe(gulp.dest(config.paths.src+'/app/'))
    .on('error', error.handleError)
});
