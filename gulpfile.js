var gulp = require('gulp'),
    prifix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourceMaps = require('gulp-sourcemaps');
    
gulp.task('html',function(){
    return gulp.src('project/*.pug')
        .pipe(pug({pretty:true}))    
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});
gulp.task('js',function(){
    return gulp.src('project/js/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
});

gulp.task('css',function(){
    return gulp.src('project/sass/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(prifix('last 2 versions'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
});

gulp.task('watch',function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/*.pug',gulp.series('html'));
    gulp.watch('project/sass/**/*.scss',gulp.series('css'));
    gulp.watch('project/js/*.js',gulp.series('js'));
});