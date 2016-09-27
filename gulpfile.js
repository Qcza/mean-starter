"use strict";
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('browser-sync', ['sass'], function () {
    browserSync.init({
        proxy: "localhost:3000"
    });
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch([
        './app/**/*.html',
        './app/**/*.css',
        './app/**/*.js'
    ], browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('default', ['browser-sync']);