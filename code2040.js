/*
	Code2040 Coding Challenge
	Author: Tuan Anh Tran Caraballo
	email: tuan2606@stanford.edu

*/

'use strict';

var myCode2040App = angular.module('myApp', []);	

myCode2040App.controller("myCode2040Contoller", ['$scope', '$http', function($scope, $http) {


	var registrationURL = "http://challenge.code2040.org/api/register";  //--> url where to send the code

	var tuanObject = {        // --> JSON object to send to Code2040
            token: "eb398e22731a7c7e608e365cfa73f3d4",
            github: "https://github.com/tuancaraballo/code2040"
     };
     
    var registrationHTTP = $http.post(registrationURL, tuanObject);
    
    registrationHTTP.success(function(data, status, headers, config) {
		
			console.log("Hello send the request!!");
			console.log(data);
			console.log(status);
			console.log(headers);
			console.log(config);
	});

	var reverseRequestURL = "http://challenge.code2040.org/api/reverse";
	var reverseResponseURL = "http://challenge.code2040.org/api/reverse/validate"

	var tuanKeyObject = {
			token: "eb398e22731a7c7e608e365cfa73f3d4"
	};


  /* This is sort of the naiive approach, it assumes the input size is small -- JS string are inmmutable,
   it's a bit more complicated than any other non-scripting language. If the input was expected to be big,
    then I would build a function "replaceCharAtIndex" so that way we can swap the characters within the string.
    iterating only through half the string. */
	var reverseString = function (str){
    	var len = str.length -1;
    
    	var new_string = "";  
    	var i;

	    for(i=len; i >= 0; i--){
    	    new_string+= str[i];
    	}
    	return new_string;
	}

	var sendReverseResponse = function(){
		 var reverseResponseHTTP = $http.post(reverseResponseURL, tuanKeyObject);
		 reverseResponseHTTP.success(function(data,status,headers,config){
		 	if(status == 200){
		 		console.log("Awesome!! it was sent successfully");
				console.log(data);
				console.log("Status code: " + status);
				console.log(headers);
				console.log(config);
		 	}else{
		 		console.log("Status code: " + status);
		 	}
		 });

	}


    var reverseRequestHTTP = $http.post(reverseRequestURL, tuanKeyObject);
   

	reverseRequestHTTP.success(function(data, status, headers, config) {
		
		if(status == 200){ // --> if already connected to the server successfully

		
			tuanKeyObject.string = reverseString(data);
			sendReverseResponse();
		}else{
			console.log("Failed to connect to the server");
		}
		
	});




}]); 

