let userData = JSON.parse(localStorage.getItem("userData"));
let element = document.getElementById("account-username");

if(element){
    element.textContent +=  userData.firstName + ' ' + userData.lastName;
}
