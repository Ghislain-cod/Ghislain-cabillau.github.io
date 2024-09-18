let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/5.webp") {
        myImage.setAttribute("src", "images/6.jpeg");
    }else {
        myImage.setAttribute("src", "images/5.webp");
    }
})

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername () {
    let myName = prompt("Veuillez saisir votre nom,");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Mozilla est cool," +  myName;
}
if (!localStorage.getItem("nom")) {
    setUsername();
}else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Mozilla est cool," + storedName;
}

myButton.addEventListener("click", function () {
    setUsername();
});