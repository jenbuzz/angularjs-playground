var gulp = require('gulp');
var ts = require('gulp-typescript');
var replace = require('gulp-replace');

gulp.task('ts', function () {
  return gulp.src('app/*.ts')
    .pipe(ts({
      'target': 'ES5',
      'module': 'commonjs',
      'experimentalDecorators': true,
      'emitDecoratorMetadata': true
    })).js
    .pipe(replace('app.ts', 'app.js'))
    .pipe(gulp.dest('./app'));
});
