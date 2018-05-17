/*
	CreatedBy :Pushkar
	Email: pushkarsoni06@gmail.com	
	Date: 17/05/2018
*/

var app = angular.module('routerApp', ['ui.router','serviceModule']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
		.state('/', {
            url: '/',
            templateUrl: 'src/list-component/list.html',
            controller: 'listController',
        })
	    .state('edit', {
            url: '/edit/:id',
            templateUrl: 'src/list-component/edit.html',
            controller: 'addEditController',
        })
		.state('add', {
            url: '/add',
            templateUrl: 'src/list-component/edit.html',
            controller: 'addEditController',
        });
		$urlRouterProvider.otherwise('/');

})
app.controller('listController',function($scope, $rootScope,$state,$stateParams, contactService) {
	
	var loadContactList = function(){
		contactService.getContactList().then(function(contactList){
			$scope.list = contactList;
		});
	};
	
	var deleteContact = function(id){
		contactService.deleteContact(id).then(function(contactList){
			$scope.list = contactList;
		});
	}
	
	$scope.delete = function(id){
		var msg = "Are you sure you want to delete?";
		if ( window.confirm(msg) ) {
			deleteContact(id);
			$scope.success = true;
			$scope.successMessage = "Record has been deleted successfully";
		}
	};
	
	this.$onInit = function() {
		loadContactList();
    };
});

app.controller('addEditController',function($scope, $rootScope,$state,$stateParams, contactService) {
	var recordIdexToUpddate =null;
	var setFormModel = function(data){
		$scope.formModel = data;
	};
	
	var clearFormData = function(){
		$scope.formModel = null;
	};
	
	var getContactDetail = function(id){
		contactService.getContactDetail(id).then(function(contactDetail){
			setFormModel(contactDetail);
		});
	};
	
	$scope.createContact = function(){
		contactService.createContact($scope.formModel, recordIdexToUpddate).then(function(contactList){
			$scope.list = contactList;
			$rootScope.success = true;
			$rootScope.successMessage = (recordIdexToUpddate)?"Record updated successfully":"Record added successfully";
			$state.go('/');
		});
	}
	
	this.$onInit = function(){
		clearFormData();
		
		recordIdexToUpddate = $stateParams.id;
		if(recordIdexToUpddate) {
			getContactDetail(recordIdexToUpddate);
		}
    };
});