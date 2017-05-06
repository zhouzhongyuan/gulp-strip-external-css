var gulp = require('gulp');
/** REMOVE ME **/ var replace = require('../../');
/** USE ME **/ // var replace = require('gulp-strip-external-css');

gulp.task('replace', function() {
  // Do an in-place replace on file.txt
  return gulp.src('index.html', { base : './' } )
    .pipe(replace('roof', 'world'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['replace']);
