/*
	userService: - For common logics related to user
	CreatedBy :Pushkar
	Email: pushkarsoni06@gmail.com	
	Date: 17/05/2018
*/


var serviceModule = angular.module('serviceModule', [])
.service('contactService',['$q','$http',function ($q, $http) {
	var contactList = [];

	this.getContactDetail = function(id){
		var contactDetail = contactList[id];
		return $q.resolve(contactDetail);
	}
	
	this.deleteContact = function(id){
		contactList.splice(id,1);
		return $q.resolve(contactList);
	}
	
	this.getContactList = function(){
		return $q.resolve(contactList);
	}
	
	this.createContact = function(data, recordIndexToUpddate){
		if(recordIndexToUpddate){
			contactList[recordIndexToUpddate] = data;
		}else{
			contactList.push(data);
		}
		
		return $q.resolve(contactList);
	}
}]);