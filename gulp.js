var gulp = require('gulp'); //here we assign our gulp task-manager in variable
var livereload = require ('gulp-livereload'); //here we assign livereload method 

gulp.task('livereload', function(){    //here we set the task in which 
	gulp.src('.css/*.css'); //  set indicated files extensions to work with 
	.pipe(livereload()); // with .pipe gulp method we can chain some multiple tasks together  
});

gulp.task('browseReloadTask', function(){ // 'browseTask' is name of our task, which we use with cmd>gulp browseReloadTask
	livereload.listen(); //starts livereload server 
	gulp.watch('.css/*.css', ['livereload']); //here we say galp to track over all of the indicated files modificationsm, changes 

});
