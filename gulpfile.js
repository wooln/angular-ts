var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function clean() {
    return del(['dist']);
}

function staticResourceRelease() {
    return gulp.src(['./src/*.html', './src/**/*.html', './src/**/*.js', './src/*.js', './src/*.json'])
        .pipe(gulp.dest('dist'));
}

function tsDefineCopy() {
    return gulp.src(['@types/**/*.ts'])
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

var build = gulp.series(clean, staticResourceRelease, tsDefineCopy, tsRelease); //parallel

exports.clean = clean;
exports.staticResourceRelease = staticResourceRelease;
exports.tsRelease = tsRelease;
exports.dev = dev;
exports.build = build;
exports.default = build;