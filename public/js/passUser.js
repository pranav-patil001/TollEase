var allowVehicle = document.getElementById('allowVehicle');
var vehicle_category = document.getElementById('vehicle_category');
var balance = document.getElementById('balance');
var cost = document.getElementById('cost');
var commArr;

function catValue() 
{
	if(commArr.category == 'Car/Jeep')
	{
		return 40;
	}
	if(commArr.category == 'Bus/Truck')
	{
		return 50;
	}
	if(commArr.category == 'Light Commercial Vehicle')
	{
		return 85;
	}
	if(commArr.category == 'Heavy Construction Vehicles')
	{
		return 100;
	}
	if(commArr.category == 'OverSized Vehicles')
	{
		return 150;
	}
	if(commArr.category == 'Three axle Vehicles')
	{
		 return 180;
	}
}

allowVehicle.addEventListener("click", function() {

	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    var hrs = today.getHours();
    var mins = today.getMinutes();
    var format = "AM";
    if(hrs>12)
    {
        hrs=hrs-12;
        format="PM";
    }

    today = + dd + '-' + getMonths(mm) + '-' + yyyy;
    var time =  hrs + ':' + mins + '' + format;

	var obj = new Object();
	obj.category = commArr.category;
	obj.vehicleNumber = vehicle_number.value;
	obj.entryDate = today;
	obj.entryTime = time;
	obj.date = new Date();
	obj.trip = "One Way ";
	obj.cost = catValue();

	var request = new XMLHttpRequest();
    request.open('POST',"/staff/addnewreceipt");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        alert("New Receipt Is Added");
        reducePassBalance();
    });  
})

function reducePassBalance() 
{
	var obj = new Object();
	obj.registration = vehicle_number.value;
	obj.balance = (commArr.balance - catValue());

	var request = new XMLHttpRequest();
    request.open('POST',"/staff/reducePassBalance");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        location.reload();
    }); 
}

function checkForPass() 
{
    var obj = new Object();
	obj.vehicleNumber = vehicle_number.value;

	var request = new XMLHttpRequest();
    request.open('POST',"/staff/passVehicle");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        commArr = JSON.parse(request.responseText);

        if(request.responseText == "false")
        {
        	$.confirm({
		      title: 'Pass ?',
		      content: "Pass Don't Exist !! ",
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
        else {
        	vehicle_category.innerHTML = commArr.category;
	        balance.innerHTML = commArr.balance;
	        var receipt_cost = catValue();
	        cost.innerHTML = receipt_cost;
	        if(commArr.balance - receipt_cost < 0) {
	        	$.confirm({
		      	title: 'Balance ?',
		      	content: "Low Balance !! ",
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
	        	document.getElementById('allowVehicle').style.visibility = 'visible';
	    }
    });  
}

function getMonths(mno) {
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return month[mno-1];
}