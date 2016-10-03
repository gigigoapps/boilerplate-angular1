'use strict';

const gulp          = require('gulp');
const watchify      = require('watchify');
const browserify    = require('browserify');
const babel         = require('babelify');
const sourcemaps    = require('gulp-sourcemaps');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const browserSync   = require('browser-sync').create();

const config        = require('../config');
const error         = require('../error');


function compile(watch) {

    var bundler = browserify({
        basedir: config.paths.src,
        entries: ['./app/app.js'],
        paths: ['./']
    }).transform(babel);

    function rebundle() {
        bundler.bundle()
        .on('error', error.handleError)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: config.sourcemap }))
        .pipe(gulpif(config.parameters[config.environment].compress,uglify({mangle: false})))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.dist+'/assets/js'));
    }

    if (watch) {
        bundler = watchify(bundler);
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
            browserSync.reload();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
};

gulp.task('bundle', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
