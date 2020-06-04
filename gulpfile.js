var gulp = require('gulp');
var browserSync = require('browser-sync').create();

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