const gulp = require('gulp');
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts']);

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-touch/angular-touch.min.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls-2.5.0.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/ng-table/bundles/ng-table.min.js'
    ])
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('public/asset/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/ng-table/bundles/ng-table.min.css',
        'node_modules/angular-toastr/dist/angular-toastr.min.css'
    ])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('public/asset/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src([
        'node_modules/font-awesome/fonts/*.*'
    ])
        .pipe(gulp.dest('public/asset/fonts'))
})