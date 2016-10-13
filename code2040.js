/*
	Code2040 Coding Challenge
	Author: Tuan Anh Tran Caraballo
	email: tuan2606@stanford.edu
*/

'use strict';

var myCode2040App = angular.module('myApp', []);	

myCode2040App.controller("myCode2040Contoller", ['$scope', '$http', function($scope, $http) {


/*****************************  Step 1: Registration ***********************************/

	var registrationURL = "http://challenge.code2040.org/api/register";  //--> url where to send the code

	var tuanObject = {        // --> JSON object to send to Code2040
            token: "eb398e22731a7c7e608e365cfa73f3d4",
            github: "https://github.com/tuancaraballo/code2040"
     };
     
    var registrationHTTP = $http.post(registrationURL, tuanObject);
    
    registrationHTTP.success(function(data, status, headers, config) {
		 if(status == 200){
		 	console.log("Great! it seems that the registration went good!");
			console.log(data);
		 }else{
		 	console.log("Hello send the request!!");
		 }
			
	});

/*****************************  Step 2: Reversing a String ***********************************/
	var reverseRequestURL = "http://challenge.code2040.org/api/reverse";
	var reverseResponseURL = "http://challenge.code2040.org/api/reverse/validate"

	var tuanKeyObject = {
			token: "eb398e22731a7c7e608e365cfa73f3d4"
	};

/*
 |     Purpose: To reverse a string
 |   Arguments: The string to be reversed
 |      Return: A new string that is the reversed version of the argument
 |   Side-Note: This is sort of the naiive approach, it assumes the input size is small -- JS string are inmmutable,
 |				it's a bit more complicated than any other non-scripting language. If the input was expected to be big,
 |				then I would build a function "replaceCharAtIndex" so that way we can swap the characters within the string.
 |				iterating only through half the string.      	
*/

  /*  */
	var reverseString = function (str){
    	var len = str.length -1;   
    	var new_string = "";    // --> because string in JS are inmmutable, I'm creating a new one
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
		 		console.log("Awesome!! it was sent successfully " + data);
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

/*****************************  Step 3 Finding Needle ***********************************/
	var hayStackURL = "http://challenge.code2040.org/api/haystack";

	var hayStackRequest = $http.post(reverseResponseURL, tuanKeyObject);
	delete tuanKeyObject["string"]; // --> removing this key that was added in the previous step, so that I can reuse
									// my object
/*
 |     Purpose: To find the needle within the haystack
 |   Arguments: An array of strings and the target string (needle).
 |      Return: It returns the index if found, otherwise returns -1;         	
*/
   var index = findNeedle(haystack, needle){
   	 var len = object.length; // --> we don't wanna call this function within the for loop, a bit more efficient  
   	 var iterator;            
   	 for(iterator=0; iterator < len; iterator++){
   	 	if(haystack[iterator] == needle) return iterator;
   	 }
   	 return -1;
   }
	hayStackRequest.success(function(data,status,headers,config) {
		if(status == 200){ // --> successful response from server.

			var index = findNeedle(data.haystack,data.needle);



		}
	})



}]); 

