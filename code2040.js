/*
	Code2040 Coding Challenge
	Author: Tuan Anh Tran Caraballo
	email: tuan2606@stanford.edu

*/
var XMLHttpRequest = require('xhr2').XMLHttpRequest;  // --> node module for xmlhttp request

var url = "http://challenge.code2040.org/api/register";  //--> url where to send the code
var tuanObject = {        // --> JSON object to send to Code2040
            token: "eb398e22731a7c7e608e365cfa73f3d4",
            github: "https://github.com/tuancaraballo/code2040"
              
}; 

var sendMyInfoToCode2040 = function (){

	var xhttp = new XMLHttpRequest();

	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "JSON/Tuan");

	xhttp.onreadystatechange = function  () {
		if(xhttp.readyState ==  1 && xhttp.status == 200){  // --> if the connection with the server was
	 		console.log("Connection successfuly established");
		    var myAPIandGitData = JSON.stringify(tuanObject);	// --> established sucessfully, then  execute the following
		    xhttp.send(myAPIandGitData);			// --> code
	 	}
	 
	}

}

sendMyInfoToCode2040();
console.log("Sent!");







