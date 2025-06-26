var submitVechile = document.getElementById('submitVechile');
var allowVechile = document.getElementById('allowVechile');
var vehicle_category = document.getElementById('vehicle_category');
var vehicle_number = document.getElementById('vehicle_number');
var trip_way = document.getElementById('trip_way');
var receipt_cost = document.getElementById('receipt_cost');

function catValue() 
{
	if(vehicle_category.value == 'Car/Jeep')
	{
		receipt_cost.value = 40;
	}
	if(vehicle_category.value == 'Bus/Truck')
	{
		receipt_cost.value = 50;
	}
	if(vehicle_category.value == 'Light Commercial Vehicle')
	{
		receipt_cost.value = 85;
	}
	if(vehicle_category.value == 'Heavy Construction Vehicles')
	{
		receipt_cost.value = 100;
	}
	if(vehicle_category.value == 'OverSized Vehicles')
	{
		receipt_cost.value = 150;
	}
	if(vehicle_category.value == 'Three axle Vehicles')
	{
		receipt_cost.value = 180;
	}
	if(trip_way.value == 'Two Way')
	{
		receipt_cost.value = (receipt_cost.value * 2);
	}
}

submitVechile.addEventListener("click", function() {

	if(vehicle_number.value == '' || receipt_cost.value == '')
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
	obj.category = vehicle_category.value;
	obj.vehicleNumber = vehicle_number.value;
	obj.entryDate = today;
	obj.entryTime = time;
	obj.receiptdate = new Date();
	obj.trip = trip_way.value;
	obj.cost = receipt_cost.value;

	var request = new XMLHttpRequest();
    request.open('POST',"/staff/addnewreceipt");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        $.confirm({
	      title: 'New Receipt ?',
	      content: "New Receipt Is Added !! ",
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
})

function fetchselectoptions()
{
	var commArr;
	var request = new XMLHttpRequest();
    request.open('GET','/admin/categoryOptions');
    request.send();
    request.onload = function()
    {
       commArr = JSON.parse(request.responseText);
       for(i in commArr)
       {
       	vehicle_category.options[vehicle_category.options.length] = new Option(commArr[i].name,commArr[i].name);
       }
    }
}

function twoWaycheck() 
{
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    today = + dd + '-' + getMonths(mm) + '-' + yyyy;

    var obj = new Object();
	obj.vehicleNumber = vehicle_number.value;
	obj.entryDate = today;

	var request = new XMLHttpRequest();
    request.open('POST',"/staff/twoWayCheck");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function() {
        var commArr = request.responseText;
        if(commArr == 'true') {
			document.getElementById('submitVechile').style.visibility = 'hidden';
			document.getElementById('allowVechile').style.visibility = 'visible';
        }
    });  
}

function getMonths(mno) {
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return month[mno-1];
}

allowVechile.addEventListener("click", function() {
    $.confirm({
	      title: 'New Receipt ?',
	      content: "New Receipt Is Added !! ",
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
})

fetchselectoptions();