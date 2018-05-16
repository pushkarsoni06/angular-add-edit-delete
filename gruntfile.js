module.exports = function(grunt) {
var path = require("path");

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		open : {
			dev : {
				path: 'http://localhost:9000/'
			}
		},
		express: {
			all:{
				options:{
					port:9000,
					hostname:'localhost',
					bases:['.'],
                    livereload: true
				}
			}
		},
		watch: {
			options:{
				livereload:true
			},
			css: {
			  files: ['src/*']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-parallel');
	grunt.loadNpmTasks('grunt-open');
	
	grunt.registerTask('default', ['express', 'open', 'express-keepalive']);
  
	grunt.registerTask('myServer', ['express', 'express-keepalive']);
};