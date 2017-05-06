var gulp = require('gulp');
/** REMOVE ME **/ var stripExternalCSS = require('../../');
/** USE ME **/ // var stripExternalCSS = require('gulp-strip-external-css');
gulp.task('strip-external-css', function () {
    return gulp.src('index.html', { base: './' })
        .pipe(stripExternalCSS())
        .pipe(gulp.dest('./'));
});
gulp.task('default', ['strip-external-css']);
