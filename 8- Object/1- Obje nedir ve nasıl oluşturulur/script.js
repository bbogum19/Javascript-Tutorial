let laptop1 = {
    brand: "Apple",
    model: "MackBook Pro",
    modelYear: "2020"
} // bu şekilde obje oluşturulur ve nesnelerde key value ilişkisi vardır.

console.log(laptop1, "Laptop 1 in türü:" + typeof (laptop1)); // Arraylerin tipi de object'tir.
console.log("Laptopun Markası= ", laptop1.brand, laptop1["brand"]); // İki sekildede nesnedeki keyin valuesine ulaşılabilinir.

// Key bilgisindeki value'yi degistirmek
laptop1.model = "Lenova";
console.log(`Güncel Model Adı: ${laptop1.model}`);
console.log("Güncel laptop1 nesnesi: ", laptop1);

// Yeni bir key ve value eklemek
laptop1.version = "2.1";
console.log("laptop1 in versiyonu: ", laptop1.version);
console.log("Güncel laptop1 nesnesi: ", laptop1);

// Key'lere ulaşmak
let keys = Object.keys(laptop1);
console.log("laptop1 in keyleri: ", keys);

keys.forEach(keyInfo => {
    console.log("Key adı:", keyInfo, "--- Value değeri: ", laptop1[keyInfo]); //  laptop1["keyInfo"] yapmadıgımıza dikkat et
});

// Value'lara ulaşmak
let values = Object.values(laptop1);
console.log("laptop1 in valueları: ", values);

values.forEach(value => {
    console.log("Value değerleri: ", value);
});