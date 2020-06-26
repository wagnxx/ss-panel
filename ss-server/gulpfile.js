var gulp = require('gulp');
var ts = require('gulp-typescript');

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
  console.log('执行ts主任务打包')
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("output"));
});


// 将外部的dist放到里面，static server指向它
gulp.task('dist', async () => {
  console.log('dist任务开始');
  gulp.src('dist/**').pipe(gulp.dest('output/dist'));
});
// 将前端的index。html放到views里 ，方便 nodejs的 ssr
gulp.task('view', async () => {
  console.log('view任务开始');
  gulp.src('src/views/**').pipe(gulp.dest('output/src/views'));
});
const done = () => console.log('所有任务完成');

gulp.task('default', gulp.series(['ts','dist', 'view', done]));
