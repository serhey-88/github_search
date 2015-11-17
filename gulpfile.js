'use strict';


var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task("default", [/*'prod',*/'watch', 'copy', 'dev'])


gulp.task('watch', ['webpack'], function () {
    gulp.watch('assets/index.html' ,["copy",'watch']);
});

gulp.task('copy', function() {
  gulp.src(["assets/index.html", "assets/dirPagination.tpl.html"])
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

gulp.task('dev', ['webpack'], function(callback) {
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config.dev');

    new WebpackDevServer(webpack(config), {
        historyApiFallback: true,
        publicPath: '/js/'
    }).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

    // keep the server alive or continue?
    // callback();
    });
});


gulp.task('test', function(callback) { 
    var resolve = require('path').resolve;
    var config = require('./webpack.config.test');
    var karma = require('karma');
    var Server = karma.Server;
    var compiler = webpack(config);
    compiler.run(function(err, stats) {
        if (err) {
            gutil.log('webpack', err);
            return;
        }
        Server.start({
            configFile: resolve(__dirname, 'karma.conf.js')
        }, 
        function(exitCode) {
            gutil.log('Karma has exited with ' + exitCode);
            process.exit(exitCode);
        });
    });

});
