module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
			compass: {
				dist: {
					options: {
						config: 'config.rb',
						environment: 'development'
					}
				},
				prod: {
					config: 'config.rb',
					environment: 'production'
				}
			},
			js: {
				files: ['js/*.js'],
				tasks: ['uglify']
			},
		
			watch: {
				compass: {
					files: ['sass/*.scss'],
					tasks: ['compass:dist']
				}
			}

    });

    grunt.registerTask('default', ['compass:dist','watch']);

};