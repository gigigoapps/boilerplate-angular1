const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config');
const imageResize = require('gulp-image-resize');

gulp.task('pngtojpg', function () {
  return gulp.src(config.paths.zeplin + 'png/**/*')
  	.pipe(imageResize({ format : 'jpg', flatten : true }))
    .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(config.paths.zeplin + 'jpg'));
});
