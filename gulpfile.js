var gulp          = require('gulp');
var browserSync   = require('browser-sync')

// Static Server + watching scss/html files
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });
});

//enviadas como arreglo las tareas que tienen que ser
// completadas antes de correr esta
gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['**/*.html', '**/*.js', '**/*.css'], browserSync.reload);
  // ... Other watchers
});
