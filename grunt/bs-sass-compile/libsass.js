// Compile Bootstrap with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
  grunt.config.merge({
    sass: {
      options: {
        includePaths: ['scss', 'scss/bootstrap'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      core: {
        files: {
          'style/<%= pkg.bootstrap %>.css': 'scss/bootstrap/<%= pkg.bootstrap %>.scss'
        }
      },
      extras: {
        files: {
          'style/<%= pkg.bootstrap %>-flex.css': 'scss/bootstrap/<%= pkg.bootstrap %>-flex.scss',
          'style/<%= pkg.bootstrap %>-grid.css': 'scss/bootstrap/<%= pkg.bootstrap %>-grid.scss',
          'style/<%= pkg.bootstrap %>-reboot.css': 'scss/bootstrap/<%= pkg.bootstrap %>-reboot.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
