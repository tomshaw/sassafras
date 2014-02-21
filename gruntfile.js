module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%=pkg.name%> - v<%=pkg.version%> (build <%=pkg.build%>) - ' + '<%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%> */'
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } 
      } 
    },
    jshint: {
      all: ['public/js/app/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%=pkg.name%> - v<%=pkg.version%> (build <%=pkg.build%>) */',
        mangle: false,
        beautify: true,
        preserveComments: true
      },
      my_target: {
        files: {
          'public/js/script.min.js': ['public/js/script.js']
        }
      }
    },
    concat: {
      dist: {
        src: [
          'public/js/vendor/jquery/dist/jquery.min.js',
          'public/js/vendor/underscore/underscore.js',
          'public/js/vendor/bootstrap-sass/dist/js/bootstrap.min.js',
          'public/js/app/script.js'
        ],
        dest: 'public/js/script.js'
      }
    },
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['public/js/app/*.js'],
        tasks: ['concat','uglify']
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
  grunt.registerTask('js', ['concat','uglify']);
} 