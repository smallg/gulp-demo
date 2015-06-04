var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var imagemin   = require('gulp-imagemin');

// Lint JS
gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concat & Minify JS
gulp.task('minify', function(){
    return gulp.src('src/*.js')
        .pipe(concat('third.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('third.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/index.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('dist'))
});

// Watch Our Files
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['lint', 'minify', 'scripts']);
});

// Default
gulp.task('default', ['lint', 'minify', 'watch', 'scripts']);
gulp.task('build', ['scripts', 'lint', 'minify']);