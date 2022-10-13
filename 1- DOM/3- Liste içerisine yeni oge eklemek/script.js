let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML += " değişti.";

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML += " değişti.";

let newListElement = document.createElement("li");
newListElement.innerHTML = "created new list element... "

let list = document.querySelector("ul#list");

list.prepend(newListElement);
// listenin basına ekleme yapar.

list.append(newListElement);
// listenin sonuna ekleme yapar.
