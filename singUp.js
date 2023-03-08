var SignUpBtn = document.getElementById("Cre_new_acc_btn");
var HideFooter = document.getElementById("Hide_Footer");
var SignUp_Page = document.getElementById("Sign_Up_page");
var SignUp_CloseBtn = document.getElementById("Sign_Up_CloseBtn");

SignUpBtn.onclick = function(){
    SignUp_Page.style.display = "flex";
    HideFooter.style.display = "none";
}

SignUp_CloseBtn.onclick = function(){
    SignUp_Page.style.display = "none";
    HideFooter.style.display = "block";
}

//form validation****************************************
let FirstName = document.getElementById("First_name");
let SurName = document.getElementById("Sur_name");
let phoneEmail = document.getElementById("phone_Email");
let Password = document.getElementById("Password");
let flag = 1;

function formvalidate(){
    if(FirstName.value.length < 3){
        FirstName.style.border = "1.5px solid red";
        flag = 0;
    }else {
        FirstName.style.border = "1.5px solid #C0C0C0";
        SurName.style.border = "1.5px solid #C0C0C0";
        flag=1;
    }
    if(phoneEmail.value.length < 10){
        phoneEmail.style.border = "1.5px solid red";
        flag=0;
    }else {
        phoneEmail.style.border = "1.5px solid #C0C0C0";
        flag=1;
    }
    if(Password.value.length < 8){
        Password.style.border = "1.5px solid red";
        flag=0;
    }else{
        Password.style.border = "1.5px solid #C0C0C0";
        flag=1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }
}
