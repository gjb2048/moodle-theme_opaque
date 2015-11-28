// Compile Bootstrap with [Ruby Sass][1] using [grunt-contrib-sass][2]
// [1]: https://github.com/sass/sass
// [2]: https://github.com/gruntjs/grunt-contrib-sass
module.exports = function configureRubySass(grunt) {
  var options = {
    loadPath: ['scss', 'scss/bootstrap'],
    precision: 6,
    sourcemap: 'auto',
    style: 'expanded',
    trace: true,
    bundleExec: true
  };
  grunt.config.merge({
    sass: {
      core: {
        options: options,
        files: {
          'style/<%= pkg.bootstrap %>.css': 'scss/bootstrap/<%= pkg.bootstrap %>.scss'
        }
      },
      extras: {
        options: options,
        files: {
          'style/<%= pkg.bootstrap %>-flex.css': 'scss/bootstrap/<%= pkg.bootstrap %>-flex.scss',
          'style/<%= pkg.bootstrap %>-grid.css': 'scss/bootstrap/<%= pkg.bootstrap %>-grid.scss',
          'style/<%= pkg.bootstrap %>-reboot.css': 'scss/bootstrap/<%= pkg.bootstrap %>-reboot.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
};
