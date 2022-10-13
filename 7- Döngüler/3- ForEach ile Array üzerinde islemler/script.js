// FOREACH DİZİLERİN İCİNDE DÖNGÜ KULLANMAK İÇİN KULLANILIR!

let listDOM = document.querySelector("#list");

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

PRODUCTS.forEach(product => {
    product = product.toUpperCase();
    let liDOM = document.createElement("li");
    liDOM.innerHTML = product;
    listDOM.append(liDOM);
}); // forEach dizilerdeki her bir elemana teker teker ulaşmaya yarayan bir methoddur. 
//Bu methodu kullanırken arrow function kolaylık saglar. Burada isimsiz bir arrow function yazdık.
//Burada yazmış olduğumuz "product" teker teker dizinin her bir ögesine atanıyor.
//Gelen parametre tek bir tane oldugu için ("product") parantez koymaya gerek yok ---ARROW FUNCTİONUN ÖZELLİGİ

PRODUCTS.forEach(
    (item, index, array) => {
        console.log(array, " arrayindeki", index, " index numarasındaki item: ", item, " dır.");
    }
) // forEach kullanırken bir fonksiyon ve dizinin icerisindeki elemanları tutacak bir parametre ("product") ZORUNLUDUR.
// bunların yanında ekstra olarak kullanması istege baglı olaraktan index numarası (2. parametre) ve arrayin kendisi (3. parametre) bilgileride forEach yardımıyla gelir.

