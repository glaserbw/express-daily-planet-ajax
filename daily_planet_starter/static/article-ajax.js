console.log("hi from ajax");

$(document).ready(function() {

  $("#edit-form").submit(function(e){
  	e.preventDefault();

  	var teamURL = $(this).attr("action");
  	var teamData = $(this).serialize();

  	console.log("URL is ", teamURL);
  	console.log("data ", teamData);

  	$.ajax({
  		method: "PUT", 
  		url: teamURL, 
  		data: teamData
  	}).done(function(data){
  		// console.log("success!", data);
  		window.location = "/teams";
  	}).fail(function(err){
  		console.log("Error", err);
  	}); //end of AJAX

  }); //end of edit form submit
  
  $("#delete-btn").click(function(e){
  	e.preventDefault();
  	var teamUrl = $(this).attr("href"); 

  	console.log("stuff is working, URL is ", teamUrl);

  	$.ajax({
  		method: "DELETE",
  		url: teamUrl
  	}).done(function(data){
  		console.log("success", data);
  	}).fail(function(err){
  		console.log("err", err);
  	});
  });

}); // end of document ready