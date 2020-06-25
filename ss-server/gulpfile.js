var gulp = require('gulp');
var ts = require('gulp-typescript');

// gulp.task("default", function () {
//     var tsResult = gulp.src("src/**/*.ts")
//         .pipe(ts({
//             //   noImplicitAny: true,
//               out: "output.js"
//         }));
//     return tsResult.js.pipe(gulp.dest('output/'));
// });

gulp.task('task1', async () => {
  console.log('dist任务开始');
  gulp.src('dist/**').pipe(gulp.dest('output/dist'));
});
gulp.task('task2', async () => {
  console.log('view任务开始');
  gulp.src('src/views/**').pipe(gulp.dest('output/src/views'));
});
const done = () => console.log('所有任务完成');

gulp.task('default', gulp.series(['task1', 'task2', done]));
