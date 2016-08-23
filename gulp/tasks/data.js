const gulp      = require('gulp');
const config    = require('../config');

gulp.task('data', function(done) {
    return gulp.src([config.paths.src+'/assets/data/**/*.json'])
        .pipe(gulp.dest(config.paths.dist+'/assets/data'));
});
