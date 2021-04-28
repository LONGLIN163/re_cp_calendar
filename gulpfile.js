var gulp = require('gulp'); 
var less = require('gulp-less');
var path = require('path');
const { watch, series } = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var fs = require("fs"); 

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('cssconcat', function() {
  return gulp.src(['./css/**/*.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task("clean",function(){
  var deleteFolder = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
              }
          });
        fs.rmdirSync(path);
    }
  };

  deleteFolder("./css")
});

gulp.task('dev', series("less",'cssconcat'));
gulp.task('build', series("less",'cssconcat',"clean"));

//gulp.watch('./less/**/*.less',series("less"))
gulp.watch('./less/**/*.less',series("dev"))