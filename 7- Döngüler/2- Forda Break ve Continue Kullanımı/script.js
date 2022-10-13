let continueListDOM = document.querySelector("#continueList");

let users = ["Ahmet", "Mehmet", "Berkay", "Erenay", "Burak"];

for (let index = 0; index < users.length; index++) {
    if (users[index] == "Erenay") { continue } // " users[index] = erenay " oldugu zaman islemi atla anlamına geliyor.
    let liDOM = document.createElement("li");
    liDOM.innerHTML = users[index];
    continueListDOM.append(liDOM);
}

let lineDOM = document.querySelector("#line");
let hrDOM = document.createElement("hr");

lineDOM.append(hrDOM);


let breakListDOM = document.querySelector("#breakList");

for (let index = 0; index < users.length; index++) {
    if (users[index] == "Berkay") { break } // " users[index] = berkay " oldugu zaman tüm islemi durdur ve bırak anlamına gelir.
    let liDOM = document.createElement("li");
    liDOM.innerHTML = users[index];
    breakListDOM.append(liDOM);
}



