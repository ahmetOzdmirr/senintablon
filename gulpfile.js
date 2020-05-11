var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


var jsLibPaths = 'dev/assets/js/lib/',
    jsPaths = 'dev/assets/js/',
    scssPath = 'dev/assets/scss/',
    cssPath = 'dev/assets/css/',
    htmlPath = 'dev/**/*.html',
    mapsPath = 'dev/assets/**/*/*.map';

var paths = {
    scriptsLib: [
        jsLibPaths + 'snippet.js',
        jsLibPaths + 'jquery.min.js',
        jsLibPaths + 'bootstrap.min.js',
        jsLibPaths + 'bootstrap-select.min.js',
        jsLibPaths + 'jquery.fancybox.min.js',
        jsLibPaths + 'swiper.min.js',
        jsLibPaths + 'sweetalert.js',
        jsLibPaths + 'aos.js',
        jsLibPaths + 'touchspin.min.js',
        jsLibPaths + 'shared.js',
        jsLibPaths + 'formvalidation.js',
        jsLibPaths + 'security.min.js',
        jsLibPaths + 'formandfunctions.js',
        jsLibPaths + 'jquery.mCustomScrollbar.concat.min.js',
        jsLibPaths + 'jquery.twbsPagination.min.js',
        jsLibPaths + 'touch.min.js',
        jsLibPaths + 'intlTelInput-jquery.min.js',
        jsLibPaths + 'utils.js',
    ],
    scripts: [
        jsPaths + 'core.js'
    ],
    scss: [
        scssPath + 'core.scss'
    ]
};

var env = process.env.NODE_ENV || 'dev' ;


gulp.task('clean-map', function () {
    return gulp.src(mapsPath, {read: false})
        .pipe(clean());
});

gulp.task('scriptsLib', function() {
    return gulp.src(paths.scriptsLib)
        .pipe(gulpif(env === 'dev',sourcemaps.init({largeFile: true})))
        .pipe(gulpif(env === 'prod',uglify()))
        .pipe(concat('lib.min.js'))
        .pipe(gulpif(env === 'dev',sourcemaps.write('/')))
        .pipe(gulp.dest(jsPaths))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(gulpif(env === 'dev',sourcemaps.init({largeFile: true})))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(concat('core.min.js'))
        .pipe(gulpif(env === 'dev',sourcemaps.write('/')))
        .pipe(gulp.dest(jsPaths))
        .pipe(browserSync.stream());
});

//console.log('test',path.resolve('node_modules'));

gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(gulpif(env === 'dev',sourcemaps.init({largeFile: true})))
        .pipe(gulpif(env === 'prod',sass({includePaths: [path.resolve('node_modules')], outputStyle: 'compressed'}).on('error', sass.logError)))
        .pipe(gulpif(env === 'dev',sass({includePaths: [path.resolve('node_modules')]}).on('error', sass.logError)))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(gulpif(env === 'dev',sourcemaps.write('/')))
        .pipe(gulp.dest(cssPath))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['scriptsLib', 'scripts', 'scss'], function() {

    browserSync.init({
        server: "dev",
        notify: false/*,
        proxy: {
            // target: "",
            target: "",
            ws: true
        }*/
    });

    gulp.watch(paths.scriptsLib, ['scriptsLib']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(scssPath + "/**/*.scss", ['scss']);
    gulp.watch(htmlPath).on('change', browserSync.reload);

});


gulp.task('default', ['scriptsLib', 'scripts', 'scss', 'serve']);

gulp.task('prod', ['scriptsLib', 'scripts', 'scss', 'clean-map']);