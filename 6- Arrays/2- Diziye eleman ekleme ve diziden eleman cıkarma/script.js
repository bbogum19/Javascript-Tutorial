// Orjinal Array
let items = [10,20,30,40];
console.log("Arrayin orjinal hali: " , items);

// Arrayin sonuna eleman ekleme: --PUSH--
items.push(50);
console.log("Arrayin sonuna 50 sayısını ekledik: " , items);

// Arrayin sonundaki elemanını cıkarma: --POP--
let lastItem = items.pop(); // arraydeki son elemanı pop ile cıkarırsak bu elemanı bir degiskende tutmamız tavsiye edilir.
console.log("Arrayin en son elemanı:", lastItem , " ve bu elemanı cıkardık. Arrayin son hali:" ,items);

// Arrayin basına eleman ekleme: --UNSHIFT--
items.unshift(0);
console.log("Arrayin basına 0 elemanını ekledik ve arrayin son hali: " , items);

// Arrayin basındaki elemanı cıkarma: --SHIFT--
let firstItem = items.shift(); // arraydeki bir elemanı cıkarınıca bir tane değiskene ataman tavsiye edilir.
console.log("Arrayin basındaki eleman: " , firstItem , "ve bu elemanı cıkardıktan sonraki arrayin son hali: " , items);

// Arraydeki ilk ogenin degistirilmesi: 
items[0] = "Arrayin ilk ogesi degisti";
console.log(items);

// Arraydeki son ogenin degismesi:
items[items.length - 1] = "Arraydeki son oge de degisti";
console.log(items);