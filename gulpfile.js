"use strict";
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('browser-sync', ['sass', 'uglify'], function () {
    browserSync.init({
        proxy: "localhost:3000"
    });
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./js/**/*.js', ['uglify']);
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

gulp.task('uglify', function (cb) {
    pump([
        gulp.src('js/**/*.js'),
        uglify(),
        gulp.dest('app/js')
    ],
    cb
    );
});

gulp.task('default', ['browser-sync']);