module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-rollup');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    rollup: {
      main: {
        files: {
          'dist/index.js': 'src/index.js'
        }
      }
    },
    stylus: {
      main: {
        files: {
          'dist/css.css': 'src/styl.styl'
        }
      }
    },
    clean: {
      options: {
        'no-write': false
      },
      css: ['dist/*']
    }
  });

  grunt.registerTask('default', ['clean', 'rollup:main', 'stylus:main']);
}