let firstName = "GlobalFirstName";

function greetings(firstName = "", lastName = "") { // default parametre olayını kullandık
    console.log(`${firstName} ${lastName}`);
}

console.log(firstName);

greetings("Berkay"); // Parametre atamak zorunda degiliz.

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Erenay", "Deniz")
console.log(greetingsInfo);



// Html sayfasında görmeye yarayan fonksiyon yazmak istersek: 
function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info;
}

domIdWriteInfo("info", "Merhaba Berkay");
domIdWriteInfo("greeting", greetings2("Burak", "Bogum"));

let htmlColor = `<span style="color:red">Kırmızı renkli tag eklendi...</span>`;
domIdWriteInfo("color", htmlColor);