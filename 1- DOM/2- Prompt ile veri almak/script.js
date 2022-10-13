let fullName = prompt("Lütfen adınızı ve soyadınızı giriniz");

let title = document.querySelector("#title");
title.innerHTML = 
`
    ${title.innerHTML} <span style="color:red;"> ${fullName} </span>

`