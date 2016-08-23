const gulp      = require('gulp');
const config    = require('../config');

gulp.task('html', function(done) {
    return gulp.src([config.paths.src+'/*.html'])
        .pipe(gulp.dest(config.paths.dist+'/'));
});
