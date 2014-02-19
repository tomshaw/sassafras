module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'public/js/script.js': ['public/js/app/script.js']
        }
      }
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } 
      } 
    },
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['public/js/app/*.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['public/sass/*.scss'],
        tasks: ['compass:dev']
      },
      phtml: {
        files: ['module/**/*.phtml']
      },
      php: {
        files: ['module/**/*.php']
      }
    } 
  })
  grunt.registerTask('default', ['watch']);
} 