
module.exports = function(grunt) {

  //configure tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          noCache: true
        },
        files: {
          'css/style.css': 'src/scss/app.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')(),
          require('autoprefixer')({broswers: 'last 2 versions'}),
          require('postcss-size')({}),
          require('postcss-alias')({}),
          require('postcss-center')({}),
          require('postcss-vmin')({}),
        ]
      },
      files: {
        expand: true,
        cwd: 'css',
        src: ['*.css'],
        dest: 'css',
      },
    },
    watch: {
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['copy:js'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass', 'postcss'],
        options: {
          spawn: false,
        }
      },
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            '*/**',
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './'
          }
        }
      }
    },
    copy: {
      images: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: [
            '**.jpg',
            '**.jpeg',
            '**.png',
            '**.gif',
            '**.svg',
            '**.ico'
          ],
          dest: 'img'
        }]
      },
      theme: {
        files: [{
          expand: true,
          spawn: false,
          cwd: 'src/',
          src: [
            '**/*',
            'js/**/*',
            '!scss/**',
            'fonts/**',
            'img/**'
          ],
          dest: ''
        }]
      },
      js: {
        files: [{
          expand: true,
          spawn: false,
          cwd: 'src/',
          src: [
            'js/**/*',
          ],
          dest: ''
        }]
      }
    },
  });
  //load the plugins
  grunt.loadNpmTasks ('grunt-sass'); //Convert to css
  grunt.loadNpmTasks('grunt-contrib-watch'); //Watch when items change
  grunt.loadNpmTasks('grunt-browser-sync'); //Sync browser
  grunt.loadNpmTasks('grunt-contrib-copy'); //copy to wordpress
  grunt.loadNpmTasks('grunt-postcss'); //post css

  //Register tasks
  grunt.registerTask('default', ['sass', 'postcss', 'copy', 'browserSync' , 'watch']);

};
