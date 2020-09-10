const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();

function css() {
  return gulp
    .src('./app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
  gulp.watch('./app/scss/**/*.scss', css);
  gulp.watch('./app/**/*.html').on('change', browserSync.reload);
  // gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
}

exports.default = watch;


