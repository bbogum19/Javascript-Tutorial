// JSON dosyasından veri cekmek:

fetch('./data/settings.json')
    .then((response) => response.json())
    .then((data) => {
        console.log("Objenin tamamı:", data);
        console.log("UserName:", data.userName);
        console.log("Password:", data.password);
        console.log("---Api üzerinden veri cekmenin örneği asagıdaki gibidir---");
    });


// Api üzerinden veri cekmek:
let userListDOM = document.querySelector("#userList");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
        console.log(element.username);
        let li = document.createElement("li");
        li.innerHTML = element.username
        userListDOM.append(li)
    });
  })