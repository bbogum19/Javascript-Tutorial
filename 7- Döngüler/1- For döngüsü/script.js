let listDOM = document.querySelector("#list");

let users = ["Mehmet" , "Ahmet" , "Emre"];

for(let index = 0 ; index < users.length ; index++) {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = users[index];
    listDOM.appendChild(liDOM)
}