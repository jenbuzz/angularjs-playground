var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function () {
  return gulp.src('app/*.ts')
    .pipe(ts({
      'target': 'ES5',
      'module': 'commonjs',
      'experimentalDecorators': true,
      'emitDecoratorMetadata': true
    })).js
    .pipe(gulp.dest('./app'));
});
