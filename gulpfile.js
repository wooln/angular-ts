const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// 静态服务器
gulp.task('dev', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "src/default"
        }
    });

    gulp.watch("src/**/*").on('change', browserSync.reload);
});

gulp.task("default", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("src"));
});