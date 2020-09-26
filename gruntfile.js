const babel = require('@rollup/plugin-babel').default;

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-rollup');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-concurrent');

  /* Configurations for tasks */
  grunt.initConfig({
    /* Main tasks */
    rollup: {
      options: {
        plugins: [
          babel({
            exclude: './node_modules/**',
            babelHelpers: 'bundled' // Also, you can check the "plugin-transform-runtime" plugin for Babel to cut final size.
          })
        ]
      },
      main: {
        files: {
          'dist/index.js': 'src/index.js'
        }
      }
    },
    eslint: {
      options: {
        failOnError: false
      },
      target: ['src/**/*.js']
    },
    stylus: {
      main: {
        files: {
          'dist/css.css': 'src/index.styl'
        }
      }
    },

    /* Service tasks */
    clean: { // Be careful when setting this script.
      options: {
        'no-write': false
      },
      dist: ['dist/*']
    },
    concurrent: {
      web: ['scripts', 'styles']
    },
    watch: {
      scripts: {
        files: './src/**/*.js',
        tasks: ['scripts']
      },
      styles: {
        files: './src/**/*.styl',
        tasks: ['styles']
      }
    }
  });


  /* Tasks */
  grunt.registerTask('scripts', ['rollup:main', 'eslint']);
  grunt.registerTask('styles', ['stylus:main']);

  grunt.registerTask('build', ['clean', 'concurrent:web']);
  grunt.registerTask('watcher', ['build', 'watch']);

  grunt.registerTask('default', ['build']);
};
