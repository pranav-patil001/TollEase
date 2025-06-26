var submitStudent = document.getElementById('submitStudent');
function salesReport() {

	var request = new XMLHttpRequest();
    request.open('POST',"/admin/FindreceiptSale");
    request.setRequestHeader("Content-Type","application/json");
    request.addEventListener("load",function() {
        var data = JSON.parse(request.responseText)
        for(i in data)
        {
        	if(data[i]._id.month != null) {
                addToTable(data[i]);
            }
        }
    });  
    request.send();
}

function addToTable(obj)
{
	var x=document.getElementById('categories').insertRow(-1);
	var y = x.insertCell(0);
	var z = x.insertCell(1);
	var a = x.insertCell(2);
	var k = x.insertCell(3);
	y.innerHTML = i;
	z.innerHTML = getMonths(obj._id.month);
	a.innerHTML = obj._id.year;
	k.innerHTML = obj.total;
	i++;
}


function getMonths(mno) {
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return month[mno-1];
}

salesReport();