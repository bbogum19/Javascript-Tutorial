let randomNumber = Math.ceil(Math.random() * 10)
let number = prompt("1 - 10 arasında tuttuğum sayıyı tahmin ediniz: ");
let info = document.querySelector("#info");


if (number == randomNumber) {
    info.innerHTML = `Doğru cevap! , Bu sayı: ${number}`
}
else if (number == 0) {
    alert(`Lütfen 1 ile 10 arasında bi sayı giriniz.`);
}
else if (number == null) {
    alert(`Lütfen 1 ile 10 arasında bi sayı giriniz.`);
}
else if (number.toString().length > 1) {
    alert(`Lütfen tek basamaklı bi sayı giriniz.`);
}
else {
    info.innerHTML = `Bilemediniz!. Dogru cevap: ${randomNumber}`;
}

