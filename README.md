Step Steps:-
=================
1. Install Node JS
2. npm init	(To Create package json)
3. Run folling command to install npm module
	
	a. npm install -g grunt-cli
	b. npm install karma --save-dev
	c. npm install karma-jasmine --save-dev
	d. npm install karma-chrome-launcher --save-dev
	e. npm install jasmine-core --save-dev
	f.  npm install grunt --save-dev
	g. npm install angular --save-dev
	h. npm install grunt-express --save-dev   // To install grunt express server
	i. npm install grunt-contrib-watch --save-dev
	j. karma init  // To run test cases(karma start karma.config.js):-
	
	
4. grunt ( default grunt task has created to start server and run application )
	    -- To check this grunt task 
			Go to gruntfile.js and check default task (grunt.registerTask('default', ['express', 'open', 'express-keepalive']);)