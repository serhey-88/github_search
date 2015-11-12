var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task("default", [/*'prod',*/'watch', 'copy', 'webpack'])


gulp.task('watch', ['webpack'], function () {
    gulp.watch('assets/index.html' ,["copy",'watch']);
});

gulp.task('copy', function() {
  gulp.src("assets/index.html")
    .pipe(gulp.dest('build/'));
});


gulp.task("webpack", function(callback) {
    // run webpack
    var config = require('./webpack.config');
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

/*gulp.task("test", function(callback) {
    // run webpack
    var config = require('./webpack.config.test');
    
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
    var mocha = require('mocha');
});

*/
/*
gulp.task('test', function(callback) {
    
    var config = require('./webpack.config.test.js');
    var karma = require('karma');
    var Server = karma.Server;

    var compiler = webpack(config);
    compiler.run(function(err, stats) {
        if (err) {
            gutil.log('webpack', err);
            return;
        }
        Server.start({
            configFile: __dirname, 'karma.conf.js'
        }, function(exitCode) {
            gutil.log('Karma has exited with ' + exitCode);
            process.exit(exitCode);
        });
    });

});
*/