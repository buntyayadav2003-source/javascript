
const bikeImageElmt = document.querySelector("#bikeImage");
const badgeTagElmt = document.querySelector("#badgeTag");
const redBtnElmt = document.querySelector("#red");
const blackBtnElmt = document.querySelector("#black");
const blueBtnElmt = document.querySelector("#blue");
const cartBtnElmt = document.querySelector("#cartBtn");


function changeToRed() {
    badgeTagElmt.style.backgroundColor = "#ff3b30";
    badgeTagElmt.textContent = "Red"

    cartBtnElmt.style.backgroundColor = "#ff3b30";

    bikeImageElmt.setAttribute("src", "./gt red 1.avif")
}
redBtnElmt.addEventListener("click", changeToRed);


function changeToBlack() {
    badgeTagElmt.style.backgroundColor = "#111111";
    badgeTagElmt.textContent = "Black"

    cartBtnElmt.style.backgroundColor = "#111111";

    bikeImageElmt.setAttribute("src", "./black.avif")
}
blackBtnElmt.addEventListener("click", changeToBlack)

 function changeToBlue() {
    badgeTagElmt.style.backgroundColor = "#0056b3";
    badgeTagElmt.textContent = "Blue";
    
    cartBtnElmt.style.backgroundColor = "#0056b3";
    
    bikeImageElmt.setAttribute("src", "./blue.webp");
}

blueBtnElmt.addEventListener("click", changeToBlue);