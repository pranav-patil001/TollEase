var oldpass = document.getElementById('oldpass');
var newpass = document.getElementById('newpass');
var submitbtn = document.getElementById('submitbtn');
var len,small,big,no,mat;

function checkPassword() {
	checkLength();
	checkCapital(oldpass.value);
	checkSmall(oldpass.value);
	checkNumber(oldpass.value);
	backCheck(oldpass.value);
	matchPassword();
}

function checkLength() {
	if(oldpass.value.length > 7)
	{
		document.getElementById("8char").className = "fa fa-check";
		document.getElementById("8char").style.color = "green";
		len = 1;
	}
}

function checkCapital(strings) {
	if(strings.search(/[A-Z]/) >= 0)
	{
		document.getElementById("ucase").className = "fa fa-check";
		document.getElementById("ucase").style.color = "green";
		big = 1;

	}
}

function checkSmall(strings) {
	if(strings.search(/[a-z]/) >= 0)
	{
		document.getElementById("lcase").className = "fa fa-check";
		document.getElementById("lcase").style.color = "green";
		small = 1;
	}
}

function checkNumber(strings) {
	if(strings.search(/[0-9]/) > 0)
	{
		document.getElementById("num").className = "fa fa-check";
		document.getElementById("num").style.color = "green";
		no = 1;
	}
}

function matchPassword()
{

	if(oldpass.value == newpass.value)
	{
		document.getElementById("pwmatch").className = "fa fa-check";
		document.getElementById("pwmatch").style.color = "green";
		mat = 1;
	}
	if(newpass.value.length < oldpass.value.length || newpass.value.length > oldpass.value.length)
	{
		document.getElementById("pwmatch").className = "fa fa-times";
		document.getElementById("pwmatch").style.color = "red";
		mat = 0;
	}
}

function backCheck(strings)
{
    if(strings.search(/[0-9]/) < 0)
	{
		document.getElementById("num").className = "fa fa-times";
		document.getElementById("num").style.color = "red";
		len = 0;
	}	
	if(strings.search(/[a-z]/) < 0)
	{
		document.getElementById("lcase").className = "fa fa-times";
		document.getElementById("lcase").style.color = "red";
		small = 0;
	}
	if(strings.search(/[A-Z]/) < 0)
	{
		document.getElementById("ucase").className = "fa fa-times";
		document.getElementById("ucase").style.color = "red";
		big = 0;
	}
	if(oldpass.value.length < 7)
	{
		document.getElementById("8char").className = "fa fa-times";
		document.getElementById("8char").style.color = "red";
		no = 0;
	}
}

submitbtn.addEventListener("click", function() {
	if(oldpass.value == '' || newpass.value == '')
    {
		$.confirm({
	      title: 'Fields ?',
	      content: "Field is Empty !! ",
	      draggable: true,
	      buttons: {
	        OK: {
	            btnClass: 'btn-success any-other-class',
	             action: function () {      
	          }
	          },
	          }
	    });
        return;
    }

    var obj = new Object();
	obj.newpass = newpass.value;

    if(len == 1 && small == 1 && big == 1 && no == 1 && mat == 1)
    {
    	var request = new XMLHttpRequest();
		request.open('POST', '/login/changePassword');
	    request.setRequestHeader("Content-Type","application/json");
	    request.send(JSON.stringify(obj))
	    request.onload = function ()
	    {
			$.confirm({
		      title: 'Password ?',
		      content: request.responseText,
		      draggable: true,
		      buttons: {
		        OK: {
		            btnClass: 'btn-success any-other-class',
		             action: function () {  
		             location.reload();    
		          }
		          },
		          }
		    });
	    }  
    }
    else
    {
    	$.confirm({
		      title: 'Parameters ?',
		      content: "All Parameters are not fulfilled !!",
		      draggable: true,
		      buttons: {
		        OK: {
		            btnClass: 'btn-success any-other-class',
		             action: function () {    
		          }
		          },
		          }
		   });
    	return;
    }
})