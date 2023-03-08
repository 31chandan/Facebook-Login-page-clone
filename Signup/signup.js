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