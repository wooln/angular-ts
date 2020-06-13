var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function clean() {
    return del(['dist']);
}

function htmlRelease() {
    return gulp.src(['./src/*.html', './src/**/*.html', './src/**/*.js', './src/*.js'])
        .pipe(gulp.dest('dist'));
}

function tsDefineCopy() {
    return gulp.src(['node/**/*.ts'])
        .pipe(gulp.dest('node_modules/@types'));
}

function tsRelease() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
}

function dev() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("dist/**/*").on('change', browserSync.reload);
}

var build = gulp.series(clean, htmlRelease, tsDefineCopy, tsRelease); //parallel

exports.clean = clean;
exports.htmlRelease = htmlRelease;
exports.tsRelease = tsRelease;
exports.dev = dev;
exports.build = build;
exports.default = build;