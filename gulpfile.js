/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-10 09:49:00
 * @version $Id$
 */

var gulp = require('gulp'),
	less = require('gulp-less'),
	//mincss = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	jsmin = require('gulp-uglify'),
	browserSync = require('browser-sync').create();

var src = './src',
	dist = './dist',
	staticSrc = ['./src'],
	// Demo URL
	proxyURL = 'http://192.168.15.206:8002';
// proxyURL = 'http://rap.taobao.org';
// Dev URL
// proxyURL = 'http://192.168.16.167:9998';

gulp.task('serve', ['sassTask'], function(){
	browserSync.init({
		// staticPath proxy mode must disable
		server: src,
	    open: false,
		ghostMode: {
			clicks: false,
			forms: true,
			scroll: false
		},
		port: 9005,
		// Disable UI completely
		ui: false
		// Directory mode
		// directory: true,
		// Proxy start
		// For proxyStaticPath
		/*serveStatic: staticSrc,
		proxy:{
			// domain
			target: proxyURL
			// When your app also uses web socket
			// ,ws:true
		}*/

	});
	// gulp.watch("./less/*.less", ['lessTask']);
	gulp.watch("./src/assets/scss/**/*.scss", ['sassTask']);
	// gulp.watch("./js/*.js", ['jsminTask']);
	// gulp.watch("./css/*.css", ['autoPrefixer']);
	gulp.watch("./**/*.html").on('change', browserSync.reload);
});

/*gulp.task('lessTask', function(){
	// multiple files change to array type (['','',...])
	return gulp.src('less/!*.less')
			.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
			.pipe(less())
			// .pipe(mincss({compatibility: 'ie7'}))
			// .pipe(mincss())
			.pipe(autoprefixer({
						browsers: ['last 2 versions','Firefox <= 20'],
						cascade: false
					}))			

			.pipe(gulp.dest('css'))
			.pipe(browserSync.stream());
});*/

gulp.task('sassTask', function(){
	return gulp.src('./src/assets/scss/*.scss')
			.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
			// compressed,expanded
			.pipe(sass({outputStyle:'expanded'}))
			.pipe(autoprefixer({
						browsers: ['last 2 versions','Firefox <= 20'],
						cascade: false
					}))			
			.pipe(gulp.dest('./src/assets/css'))
			.pipe(browserSync.stream());
});

gulp.task('jsminTask', function(){
	return gulp.src('./js/*.js')
		.pipe(jsmin())
		.pipe(gulp.dest('./js-min'));
});

gulp.task('default', ['serve']);

// Only watch less types files
// gulp.task('default', function(){
// 	gulp.watch('less/source.less',['lessTask']);
// });