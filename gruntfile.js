const babel = require('@rollup/plugin-babel').default;

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-rollup');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.initConfig({
    watch: {
      scripts: {
        files: './src/**/*.js',
        tasks: ['rollup:main']
      },
      styles: {
        files: './src/**/*.styl',
        tasks: ['stylus:main']
      }
    },
    rollup: {
      options: {
        plugins: [
          babel({
            exclude: './node_modules/**'
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
    clean: {
      options: {
        'no-write': false
      },
      dist: ['dist/*']
    }
  });

  grunt.registerTask('default', ['clean', 'rollup:main', 'stylus:main']);
  grunt.registerTask('watcher', ['clean', 'rollup:main', 'stylus:main', 'watch']);
}