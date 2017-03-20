var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require ('gulp-csso');
var watch = require ('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('css', function(){
  return gulp.src('src/assets/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/assets/css'))
});

gulp.task('watch', function() {

  // Watch .less files
  gulp.watch('src/assets/less/*.less', ['css']);
});


gulp.task('default', ['css, watch']);
