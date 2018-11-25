var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:4200",
        notify: false
    });
});

gulp.task('default', ['browser-sync']);
