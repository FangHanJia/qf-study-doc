let gulp = require('gulp');
let sass = require('gulp-sass');

// 编译任务
gulp.task('testSass',function(){
  // 查找sass文件所在目录
  gulp.src('./src/sass/*.scss')
  .pipe(sass({outputStyle:'expanded'})).on('error',sass.logError)
  .pipe(gulp.dest('./src/css'));
});
// 监听任务：监听编译任务
gulp.task('watch',function(){
  gulp.watch('./src/sass/*.scss',['testSass']);
});

// es6转化为es5
let babel = require('gulp-babel');

 
gulp.task('default', function () {
  return gulp.src('./src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./src/js/a/'));
});
// js压缩任务
let uglify = require('gulp-uglify');
let pump = require('pump');
let concat = require('gulp-concat');
let rename = require('gulp-rename');

gulp.task('compressJs',function(cb){
	// gulp.src('./src/js/**/*.js')

	// .pipe(uglify())

	// // 输出到构建目录
	// .pipe(gulp.dest('./dist/js/'))

	pump([
		gulp.src('./src/js/*.js'),

		// 合并
		concat('index.js'),
		gulp.dest('./dist/js/'),

		// 压缩
		uglify(),

		// 重命名
		rename({
			suffix:'.min'
		}),

		gulp.dest('dist/js/')
	],cb );
})
