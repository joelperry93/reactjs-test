var gulp       = require("gulp");
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var react      = require('gulp-react')
var jade       = require('gulp-jade');

gulp.task("watch", function () {
    gulp.watch('./src/**/*.jsx', ['transpile-js']);
    gulp.watch('./templates/*.jade', ['templates']);
});  

gulp.task('transpile-js', function () {
  return gulp.src('./src/*.jsx')
    .transform(babelify)
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('templates', function() {
  gulp.src('./templates/*.jade')
    .pipe(jade({ locals : {} }))
    .pipe(gulp.dest('./public'))
});


gulp.task('compile', function () {
    browserify({
        entries : './js/main.js',
        debug   : true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./js/dist'))
});