// Array oluşturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [15, 25, 35, isActive, domain];
console.log(items);

let emptyArray = []; // Boş bir liste

// Array icerisindeki eleman sayisini ogrenmek
console.log(items.length);

// Array icindeki ilk elemanın cagırılması
console.log(items[0]);

// Array icindeki ortanca elemana ulaşmak
console.log((items[Math.floor(items.length / 2)]));

// Array icindeki son elemanın cagırılması
console.log(items[items.length - 1]);

// Degiskenin icindeki bilginin Array olup olmadıgının kontrol edilmesi
if (Array.isArray(items)) {
    console.log(`items array yapısındadır`);
}