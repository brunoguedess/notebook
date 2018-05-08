const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

require('./gulp/eslint');
require('./gulp/app');
require('./gulp/deps');
require('./gulp/server');

gulp.task('default', (cb) => { 
    gulpSequence('lint', 'deps', 'app', 'server', cb);
});