module.exports = function(grunt) { 
    // Do grunt-related things in here 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodemon');
    grunt.loadNpmTasks('grunt-env');
 
    grunt.registerTask('default',  [
        'jshint',
        'env:dev',
        'nodemon'
      ]);
    };

      grunt.registerTask('test', [
        'jshint',
        'env:test',
        'nodemon'
    ]);
    grunt.registerTask('production', [
        'env:dev',
        'nodemon'
    ]);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        env : {
          dev : {
            NODE_ENV : 'development'
          },
          test : {
              NODE_ENV : 'test'
          },  
          production: {
            NODE_ENV : 'production'
          }
        },

        nodemon: {
            dev: { script: 'index.js' }
             },

        jshint: {
                options: {
                  reporter: require('jshint-stylish'),
                  esversion: 6
                },
                 all: ['Grunfile.js', 'config/*.js','index.js']
               },
            });
          
