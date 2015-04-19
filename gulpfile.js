var gulp       = require("gulp");
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var react      = require('gulp-react')
var jade       = require('gulp-jade');

gulp.task("watch", function () {
    gulp.watch('./src/**/*.jsx', ['transpile-js'])
});  

/*
gulp.task('compile', function () {
    browserify({
        entries : './js/main.js',
        debug   : true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./js/dist'))
});*/



gulp.task('transpile-js', function () {
  return gulp.src('./src/**/*.jsx')
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('./public/js'))
})




gulp.task('templates', function() {
  var YOUR_LOCALS = { name : "Joel" };

  gulp.src('./templates/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public'))
});