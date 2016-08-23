'use strict';

const gulp      = require('gulp');
const notify    = require('gulp-notify');
const gutil     = require('gulp-util');

module.exports = {
    handleError: function(e) {
        var args = Array.prototype.slice.call(arguments);

        //Send error to notification center with gulp-notify
        notify.onError({
            title:   'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args);

        gutil.log(e);

        // Keep gulp from hanging on this task
        this.emit('end');
    }
}
