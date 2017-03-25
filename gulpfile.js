const gulp = require('gulp');
const scss = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server( {
    root: 'public',
    livereload: true
  });
});

gulp.task('sass', () => {
  return gulp.src('./sass/*.scss')
          .pipe(scss( {
            errLogToConsole: true
          }))
          .pipe(gulp.dest('./public/css'));
});


gulp.task('livereload', () => {
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);