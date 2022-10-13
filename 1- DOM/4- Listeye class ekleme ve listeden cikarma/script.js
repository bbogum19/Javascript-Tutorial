let title = document.querySelector("#title");
title.classList.add("text-primary");

title.classList.add("deneme1" , "deneme2" , "deneme3");
// 3 tane farklı class eklendi.

title.classList.remove("deneme2" , "deneme3");
// 2 tane farklı class çıkarıldı.

console.log(title.classList);