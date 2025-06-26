function addStaff() {
	window.location = "/admin/addStaff";
}

function manageStaff() {
	window.location = "/admin/manageStaff";
}

function addPass() {
	window.location = "/admin/addPass";
}

function managePass() {
	window.location = "/admin/managePass";
}

function passCount() {
	window.location = "/admin/passCount";
}

function passSales() {
	window.location = "/admin/passSales";
}

function openHomePage() {
    window.location = "/login/home";
}

function changePassword() {
	window.location = "/login/changePassword";
}

function openlogoutpage()
{
    $.confirm({
    theme: 'modern',
    title: 'Confirm Logout ?',
    content: 'Do you really want to logout?',
    type: 'green',
    typeAnimated: true,
    draggable: true,
    buttons: {
        Yes: {
            btnClass: 'btn btn-success',
            action: function () {
             	window.location = "/login/logout_person";
        }
    },
        No: {
             action: function () {}
    },
    }
    });
}

function addReceipts() {
	window.location = "/staff/addReceipts";
}

function receiptCount() {
    window.location = "/admin/receiptCount";
}

function receiptSales() {
    window.location = "/admin/receiptSales";
}

function manageReceipts() {
    window.location = "/admin/manageReceipts";
}

function passUser() {
    window.location = "/staff/passUser";
}

function fetchNumber() 
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    today = + dd + '-' + getMonths(mm) + '-' + yyyy;

    var obj = new Object();
    obj.entryDate = today;

    var totalStaff = document.getElementById('totalStaff');
    var totalCategories = document.getElementById('totalCategories');
    var totalPasses = document.getElementById('totalPasses');
    var todayReceipts = document.getElementById('todayReceipts');

    var countStaff;
    var request = new XMLHttpRequest();
    request.open('GET','/login/totalNoofUsers');
    request.send();
    request.onload = function()
    {
        countStaff = JSON.parse(request.responseText);
        totalStaff.innerHTML = countStaff;
    }

    var countCategory;
    var request1 = new XMLHttpRequest();
    request1.open('GET','/login/totalNoofCategory');
    request1.send();
    request1.onload = function()
    {
        countCategory = JSON.parse(request1.responseText);
        totalCategories.innerHTML = countCategory;
    }

    var countPasses;
    var request2 = new XMLHttpRequest();
    request2.open('GET','/login/totalNoofPasses');
    request2.send();
    request2.onload = function()
    {
        countPasses = JSON.parse(request2.responseText);
        totalPasses.innerHTML = countPasses;
    }

    var countReceipt;
    var request3 = new XMLHttpRequest();
    request3.open('POST','/login/totalReceiptsToday');
    request3.setRequestHeader("Content-Type","application/json");
    request3.send(JSON.stringify(obj));
    request3.onload = function()
    {
        countReceipt = JSON.parse(request3.responseText);
        todayReceipts.innerHTML = countReceipt;
    }
}

function getMonths(mno) {
    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return month[mno-1];
}

fetchNumber();