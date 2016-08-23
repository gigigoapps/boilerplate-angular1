'use strict';

const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
const combiner      = require('stream-combiner2');
const config        = require('../config');
const error         = require('../error');


gulp.task('sass', function () {
    var stream = combiner.obj([
        gulp.src(config.paths.mainSass),
        sourcemaps.init(),
        sass({
            outputStyle: 'compressed',
            sourceComments: false
        }),
        autoprefixer(),
        sourcemaps.write('.', {
                includeContent: false,
                sourceRoot: config.paths.src + '/assets/css/scss'
            }),
        gulp.dest(config.paths.dist + '/assets/css')
    ]);

    stream.on('error', error.handleError);

    return stream;
});
