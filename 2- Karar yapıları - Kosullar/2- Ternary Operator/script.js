let userName = prompt("Kullanıcı adınızı giriniz:");
let info = document.querySelector("#info");

// ternary kullanımı:
// (Koşul)  ?  (Dogru oldugunda gerceklesecek olan olay) : (Yanlıs oldugunda gerceklesecek olan olay)

// userName.length > 0 ? userName : "Kullanıcı adınızı girmediniz."
info.innerHTML = `${userName ? userName : "Kullancıı adınızı girmediniz."}`