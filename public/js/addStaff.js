var submitStudent = document.getElementById('submitStudent');
var staff_name = document.getElementById('staff_name');
var staff_email = document.getElementById('staff_email');
var staff_password = document.getElementById('staff_password');
var staff_address = document.getElementById('staff_address');
var staff_gender = document.getElementById('staff_gender');
var staff_role = document.getElementById('staff_role');
var staff_phone = document.getElementById('staff_phone');
var flag = 0;

submitStudent.addEventListener("click", function() {

	var ph = staff_phone.value;

	if(staff_name.value == '' || staff_email.value == '' || 
		staff_password.value == '' || staff_address.value == ''|| staff_phone.value == '')
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
	else if(ph.length<10 || ph.length>10)
	{
		$.confirm({
	      title: 'Phone No ?',
	      content: "Phone No should be of length 10 !! ",
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

	if(!ValidateEmail(staff_email.value))
	{
		$.confirm({
	      title: 'Email format ?',
	      content: "Email format is not valid !! ",
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
	obj.name = staff_name.value;
	obj.email = staff_email.value;
	obj.password = staff_password.value;
	obj.address = staff_address.value;
	obj.gender = staff_gender.value
	obj.role = staff_role.value;
	obj.phone = staff_phone.value;

	if(flag == 1)
	{
		$.confirm({
		      title: 'User ?',
		      content: "User Is Already Registred !! ",
		      draggable: true,
		      buttons: {
		        OK: {
		            btnClass: 'btn-success any-other-class',
		             action: function () { 
		          }
		          },
		          }
		    });
	}
	else
	{
		var request = new XMLHttpRequest();
	    request.open('POST',"/admin/addnewuser");
	    request.setRequestHeader("Content-Type","application/json");
	    request.send(JSON.stringify(obj))
	    request.addEventListener("load",function() {
	        $.confirm({
		      title: 'New User ?',
		      content: "New User Is Registred !! ",
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
	    }); 
	}

	 
})

function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function email_avail()
{
	document.getElementById("email_info").style.display = 'visible';
	document.getElementById("email_info").style.display = 'block';
	document.getElementById("email_info").style.marginTop = '10px';
	document.getElementById("email_info").style.marginBottom = '10px';
	
	var request = new XMLHttpRequest();
    request.open('POST',"/admin/checkemail");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify({email: staff_email.value}));
    request.addEventListener("load",function() {
    	var data = request.responseText;
    	if(data === 'true') {
    		display_email.innerHTML= "User " + staff_email.value + " is already exist";
    		flag = 1;
    	}
    	else {
            display_email.innerHTML= staff_email.value + " is available";
            flag = 0;
    	}
    });  
}