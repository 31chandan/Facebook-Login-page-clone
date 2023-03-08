let popUpClick = document.getElementById("Popup_click");
let popUpBox = document.getElementById("pop_up");

popUpClick.onclick = function () {
    if(popUpBox.style.display == "block"){
        popUpBox.style.display = "none";
    }else {
        popUpBox.style.display = "block";
    }
}
