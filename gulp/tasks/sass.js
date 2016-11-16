'use strict';

const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
const rename        = require('gulp-rename');
const combiner      = require('stream-combiner2');
const config        = require('../config');
const error         = require('../error');
const pxtorem       = require('gulp-pxtorem');
const pxtoremOptions = {
    replace: true,
    prop_white_list: [
                'width','min-width', 'max-width',
                'height', 'min-height', 'max-height',
                'margin', 'margin-left', 'margin-right', 'margin-top', 'margin-bottom',
                'padding', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom',
                'font', 'font-size', 'line-height', 'letter-spacing'],
};
 
const postcssOptions = {
    map: true  
};


gulp.task('sass', function () {
    var stream = combiner.obj([
        gulp.src(config.paths.mainSass),
        sourcemaps.init(),
        sass({
            outputStyle: 'compressed',
            sourceComments: false
        }),
        autoprefixer(),
        pxtorem(pxtoremOptions, postcssOptions),
        sourcemaps.write('.', {
                includeContent: false,
                sourceRoot: config.paths.src + '/assets/css/scss'
            }),
        rename('bundle.css'),
        gulp.dest(config.paths.dist + '/assets/css')
    ]);

    stream.on('error', error.handleError);

    return stream;
});
