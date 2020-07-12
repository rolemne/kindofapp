module.exports = function(grunt) {
    grunt.initConfig({
        concat : {
            files : {
                src : [
                    'ui-src/js/change-menu-state.js',
                ],
                dest : 'ui/js/main.js',
                options : {
                    interrupt: true,
                    separator : '\n\n',
                }
            },
            vendor : {
                src : [
                    'node_modules/jquery/dist/jquery.min.js'
                ],
                dest : 'ui/js/vendor.js',
                options : {
                    interrupt: true,
                    separator : '\n\n',
                }
            }
        },
        sass : {
            style : {
                src : [
                    'ui-src/sass/style.scss'
                ],
                dest : 'ui/css/style.css'
            },

            vendor : {
                src : [
                    'ui-src/sass/vendor.scss'
                ],
                dest : 'ui/css/vendor.css'
            }
        },
        
        watch : {
            js : {
                files : [
                    'ui-src/js/*.js',
                    'ui-src/js/**/*.js',
                    'ui-src/js/**/**/*.js',
                ],
                tasks : ['concat']
            },

            sass : {
                files : [
                    'ui-src/sass/*.scss',
                    'ui-src/sass/**/*.scss',
                    'ui-src/sass/**/**/*.scss',
                ],

                tasks : ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
}