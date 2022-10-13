function hello(name) {
    console.log(`Merhaba ${name}`);
} // Normal Fonksiyon
hello("JavaScript")

const helloFuncV1 = (firstName) => {
    console.log(`Merhaba ${firstName}`);
}
helloFuncV1("helloFuncV1");

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`);
// fonksiyon bir parametre aliyorsa parenteze gerek yok. Fonksiyon tek bir işlem yapıyorsa süslü parenteze de gerek yok.
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName, lastName) => console.log(
    `Merhaba ${firstName} ${lastName}`
);
helloFuncV3("helloFuncV3", "and Last name info");

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info);
    return info
} // birden fazla parametre ve birden fazla işlem oldugu zaman bu sekilde kullanılır.
helloFuncV4("helloFuncV4", "and other info");