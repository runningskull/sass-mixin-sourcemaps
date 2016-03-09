'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass')
var serve = require('gulp-serve')
var sourcemaps = require('gulp-sourcemaps')


gulp.task('sass', function() {
  return gulp.src('test.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('serve', serve({root:['public'], port:4321}))

gulp.task('default', ['sass', 'serve'])
