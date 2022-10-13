// let products;

// products.forEach(element => {
//     console.log(element);
// });

// console.log("Hata Yönetimi Yok");

// let info = "try-catch";
// console.log(info);  

// KODU YUKARIDAKİ GİBİ YAZSAYDIK EGER PRODUCTS'I ARRAY OLARAK TANIMLAMADIGIMIZ İCİN HATA VERİCEKTİ(forEach arrayin bir methodu) VE ASAGISINDA KALAN İSLEMLERİ YAPMICAKTI AMA ASAGIDAKİ İSLEMLER BU ERRORDAN BAGIMSIZ OLDUGU İCİN YAPILMASINI İSTİYORUZ:

let products;
try {
    products.forEach(element => {
        console.log(element);
    });
} catch (error) {
    console.log("error hatası:", error);
}

console.log("Hata yonetimi var ve düzgün calısıyor");

let info = "try-catch";
console.log(info);

// kodu bu sekilde yazarsak eger hatayı hem log da goruruz hemde error dan bagımsız olan islemleri calıstırmıs oluruz. 