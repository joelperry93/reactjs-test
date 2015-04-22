var gulp       = require("gulp");
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var react      = require('gulp-react')
var jade       = require('gulp-jade');
var reactify   = require('reactify');
var babelify   = require('babelify');

gulp.task("watch", function () {
    gulp.watch('./src/**/*.jsx', ['transpile-js']);
    gulp.watch('./templates/*.jade', ['jade-templates']);
});  

gulp.task('transpile-js', function () {
  return gulp.src('./src/*.jsx')
    .pipe(react({harmony: false, es6: true}))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('jade-templates', function() {
    gulp.src('./templates/*.jade')
        .pipe(jade({ locals : {} }))
        .pipe(gulp.dest('./public'))
});