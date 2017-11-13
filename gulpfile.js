var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sync = require('browser-sync').create();

gulp.task('default', ['base:html', 'base:sass', 'base:watch', 'default:server']);

gulp.task('base:html', function(){
  gulp.src('app/*.*')
      .pipe(gulp.dest('dist/'))
});

gulp.task('base:sass', function () {
  return  gulp.src('app/sass/**/*.scss')
              .pipe(sass().on('error', sass.logError))
              .pipe(gulp.dest('dist/css'))
});

gulp.task('base:vendor', function () {
  return  gulp.src(['node_modules/normalize.css/normalize.css'])
              .pipe(concat('vendor.css'))
              .pipe(gulp.dest('dist/css'))
});

gulp.task('base:watch', function () {
  gulp.watch('app/sass/**/*.scss', ['base:sass']);
  gulp.watch('app/**/*.html', ['base:html']);
});

//not working yet:
gulp.task('default:server', function () {
  sync.init({
      server: {
        baseDir: "dist"
      }
  });
});
