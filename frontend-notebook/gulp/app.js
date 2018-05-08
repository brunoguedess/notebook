const gulp = require('gulp');
const addsrc = require('gulp-add-src')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.asset']);

gulp.task('app.html', () => {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
});

gulp.task('app.css', () => {
    return gulp.src('app/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/asset/css'))
})

gulp.task('app.js', () => {
    return gulp.src('app/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        /*.pipe(uglify())*/
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/asset/js'))
})


gulp.task('app.asset', () => {
    return gulp.src('asset/**/*.*')
        .pipe(gulp.dest('public/asset'))
})