const gulp = require('gulp');
const replace = require('replace');
const config = require('../config');

const constants = config.parameters[config.environment].constants;
const replaceFiles = [config.paths.dist+'/assets/js/bundle.js', config.paths.src+'/app/constants.js'];

const url = 'http://127.0.0.1:8080/'+constants.API_URL;

gulp.task('add-proxy', function() {
    return replace({
        regex: constants.API_URL,
        replacement: url,
        paths: replaceFiles,
        recursive: false,
        silent: false
    });
})

gulp.task('remove-proxy', function() {
    return replace({
        regex: url,
        replacement: constants.API_URL,
        paths: replaceFiles,
        recursive: false,
        silent: false
    });
})
