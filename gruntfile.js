const babel = require('@rollup/plugin-babel').default;

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-rollup');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.initConfig({
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
    stylus: {
      main: {
        files: {
          'dist/css.css': 'src/index.styl'
        }
      }
    },
    watch: {
      scripts: {
        files: './src/**/*.js',
        tasks: ['rollup:main', 'eslint']
      },
      styles: {
        files: './src/**/*.styl',
        tasks: ['stylus:main']
      }
    },
    clean: { // Be careful when setting this script.
      options: {
        'no-write': false
      },
      dist: ['dist/*']
    },
    eslint: {
      target: ['src/**/*.js']
    }
  });

  grunt.registerTask('build', ['clean', 'rollup:main', 'stylus:main', 'eslint']);
  grunt.registerTask('watcher', ['build', 'watch']);

  grunt.registerTask('default', ['build']);
};
