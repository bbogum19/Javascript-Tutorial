const USERS = ["AYSE", "mehMet", "TugCE", "aKSEl"];

const NEW_USERS = USERS.map(user => user.toLowerCase());
console.log("USERS ların namelerinin hepsini kucuk harflerle yazdık ", NEW_USERS);
// Arrayde map methodunu kullanarak dizi icindeki elemanları güncelle ve fonksiyonun geri dönüş tipi obje olacak.

/*
            BİZDEN İSTENİLENLER:
- userName icinde orjinal isim kalacak.
- shorName icinde ilk harfi büyük olup sonuna nokta eklenecek.
- newName icinde ilk harfi büyük olup sonraki harfler kücük olacak.
ÖR: {userName: "AYSE", shortName: "A.", newName: "Ayse"} seklinde olacak.
*/

// const USERS_OBJ = USERS.map( item => {
//     return {
//         userName: item, shortName: `${item.charAt(0).toUpperCase()}.`, newName: `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// })

const USERS_OBJ = USERS.map(item => (
    {
        userName: item, shortName: `${item.charAt(0).toUpperCase()}.`, newName: `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
    }
)
)
// burada döndürecek oldugumuz sey bir obje oldugundan ve obje yapısını olustururken süslü parentez kullandıgımızdan dolayı return ifadesini kullanmamız gerekecek (yukarıda süslü parentezde yazdıgımız gibi)

// Ya da return ifadesini kullanmak istemiyorsan son yazmoş oldugun USERS_OBJ yapısı gibi 
// arrow function'un süslü parentezini kullanmak yerine orayı bi kapsayıcı parentez (normal parentez) kullanarakta yazabilirsin.
// hangisi daha okunaklı işine geliyorsa onu kullan.
console.log(USERS_OBJ);