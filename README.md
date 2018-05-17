Step Steps:-
=================
1. Install Node JS
2. npm init	(To Create package json)
3. Run folling command to install npm module
	npm install -g grunt-cli

	npm install karma --save-dev
	npm install karma-jasmine --save-dev
	npm install karma-chrome-launcher --save-dev
	npm install jasmine-core --save-dev
	npm install grunt --save-dev
	npm install angular --save-dev
	npm install grunt-express --save-dev   // To install grunt express server
	npm install grunt-contrib-watch --save-dev
	karma init  // To run test cases(karma start karma.config.js):-
	
	
4. grunt ( default grunt task has created to start server and run application )
	    -- To check this grunt task 
			Go to gruntfile.js and check default task (grunt.registerTask('default', ['express', 'open', 'express-keepalive']);)