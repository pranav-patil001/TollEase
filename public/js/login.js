var email_add = document.getElementById('email_add');
var user_pass = document.getElementById('user_pass');
var submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener("click", function () {
	if(email_add.value == '' || user_pass.value == '')
	{
		$.confirm({
	      title: 'Fields ?',
	      content: "Field is Empty !! ",
	      draggable: true,
	      buttons: {
	        OK: {
	            btnClass: 'btn-danger any-other-class',
	             action: function () {      
	          }
	          },
	          }
	    });
		return;
	}

	if(!ValidateEmail(email_add.value))
	{
		$.confirm({
	      title: 'Email format ?',
	      content: "Email format is not valid !! ",
	      draggable: true,
	      buttons: {
	        OK: {
	            btnClass: 'btn-danger any-other-class',
	             action: function () {      
	          }
	          },
	          }
	        });
		return;
	}

	var request = new XMLHttpRequest();
	request.open('POST',"/login/checklogin");
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify({name : email_add.value,password : user_pass.value}))
	request.addEventListener("load", function () {
		var data = request.responseText;
		if(data === 'notexits') {
    		$.confirm({
	            title: 'Email ?',
	            content: "Email Don't Exits !!",
	            draggable: true,
	            buttons: {
	            OK: {
	                btnClass: 'btn-danger any-other-class',
	                 action: function () {      
	                }
	            },
	            }
        	});
        }
        else if(data === 'false')
        {
            $.confirm({
	            title: 'Password ?',
	            content: "Password is not Correct !!",
	            draggable: true,
	            buttons: {
	            OK: {
	                btnClass: 'btn-danger any-other-class',
	                 action: function () {      
	                }
	            },
	            }
        	});
        }
    	else {
            window.location = data;
    	}
	})
})

function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}