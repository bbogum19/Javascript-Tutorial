let items = [1, 2, 3, 4];

let femaleUsers = ["Ayşe", "Fatma", "Merve", "Hulya"];
let maleUsers = ["Ahmet", "Mehmet", "Hasan"];

// Arrayin icine bir baska Array ekleme:
items.unshift(femaleUsers);

items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length); // Kadın kullancılara ait olan arrayin boyutunu ogrendik.
console.log(items[0][0]); // Ayşe bilgisine ulaştık.

// Arrayin icerisinden oge ayırmak: --SPLICE--
let newItems = items.splice(1 , 4); // newItems arrayinde index 1 den itibaren 4 tane ögeyi ayırdık

console.log("newItems: " , newItems);
console.log("items: " , items);

// Arrayin icerisindeki ogenin index bilgisini bulmak: --INDEXOF--
items.unshift("lorem");
items.push("ipsum");

console.log(items);
console.log( " 'ipsum' kelimesinin index numarası:" ,items.indexOf("ipsum"));

// Arrayi kopyalamak: --SLICE--
let copyItems = items.slice(); // copyItems = items yaparsan eger kopyadan cıkardıgın öge orjinalden de cıkar.

copyItems.pop();

console.log("Orjinal array:" , items);
console.log("Copy Array:" , copyItems);

// 2 tane arrayi bir array icinde birleştirmek: --[...]-- es6 ve sonrasında gelen bir özellik
let es6Items = [...items] // es6 ve sonrasında kopyalama islemi bu sekildede yapılabilinir.
console.log(es6Items);

let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapısını birlestirmek
console.log(allUsers);

// Array icerisindeki bilgiyi Stringe cevirmek: --TO STRING--
let changeString = allUsers.toString();
console.log("Arrayin stringe cevrilmis hali:", changeString); 

// İstedigimiz index bilgisine gore oge eklemek: --SPLICE--
allUsers.splice(allUsers.length - 1 , 0 , "Melissa");
console.log("Sondan bir oncesine 'Melissa' eklendi: ", allUsers);

allUsers.splice(Math.floor(allUsers.length / 2 ), 0, "Arda");
console.log("Ortanca elemana 'Arda' eklendi: ",allUsers);

