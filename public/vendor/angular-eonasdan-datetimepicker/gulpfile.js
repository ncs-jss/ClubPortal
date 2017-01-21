// plugins
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var bower = require('gulp-bower');
var gulp = require('gulp');

var dist = 'dist/';
var examples = 'examples/';
var html = '*.html';
var js = '*.js';
var bowerComponents = 'bower_components/';

var app = dist + 'angular-eonasdan-datetimepicker.js';
var minApp = 'angular-eonasdan-datetimepicker.min.js';

// tasks
gulp.task('lint', function () {
    return gulp.src([app, examples + js])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
    return gulp.src(app)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename(minApp))
        .pipe(gulp.dest(dist));
});

gulp.task('bower', function () {
    return bower({directory: bowerComponents});
});

gulp.task('html', function () {
    var target = gulp.src(examples + html);

    var bowerFiles = gulp.src(mainBowerFiles({paths: {bowerDirectory: bowerComponents}}), {cwd: examples});

    return target
        .pipe(inject(bowerFiles, {name: 'bower', addRootSlash: false}))
        .pipe(gulp.dest(examples));
});

gulp.task('dist', ['lint', 'minify'], function () {
});

gulp.task('default', function (cb) {
    runSequence(['bower'], ['html', 'lint', 'minify'], cb);
    gulp.watch([app], ['lint', 'minify']);
});