let domObject = document.querySelector(".button");
function changeDom() {
    domObject.innerHTML = `Clicked Me!`;
    domObject.style.color == "red" ? domObject.style.color = "black" : domObject.style.color = "red";
}

domObject.addEventListener("click", changeDom);