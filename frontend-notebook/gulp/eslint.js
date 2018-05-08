const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src('app/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})