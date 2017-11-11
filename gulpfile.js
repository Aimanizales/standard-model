var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  gulp.src('client/app/*.*')
    .pipe(gulp.dest('./dist/'))
});