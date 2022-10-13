let settings = {
    userName: "loremIpsum",
    password: "badPasword",
    isActive: true,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// objenin icindeki bilgilere tek seferde ulaşmak && Object Destructuring 
let { userName: user, password, isActive, ip: serverIp, serverName } = settings; // Rename (degiskenlerin isimlerini degistirmek) islemi ve Object Destructuring (objenin icindeki keylere tek seferde ulaştık)
console.log(user, password, isActive, serverIp, serverName);
console.log(settings);

// obje icindeki bazı bilgilerin cıkarılması ve geri kalan bilgileri baska bir objenin icine atılması
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings;
console.log("Objeden cektigimiz keyler: ", userName2, password2, isActive2);
console.log("Settings objesi: ", settings);
console.log("Kalan keylerin yeni objesi: ", newSettings);

// objenin destructuring ile kopyalanması

// HATALI!!!
// let settings2 = settings;
// settings2.userName = "degisen bilgi";
// console.log("settings", settings);
// console.log("settings2", settings2); // Çıktı olarak her iki objedeki keyin valuesi de degismis olur

let settings2 = { ...settings }; // settingsin icindeki bilgileri cıkar ve geri koy anlamına gelir.
settings2.userName = "degisen bilgi";
console.log("settings", settings);
console.log("settings2", settings2);


// Bütün islemler array icinde gecerlidir

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score; // ilk iki degeri aldık ger kalanını otherScore adında baska bir arrayin icine attık.
console.log(score1, score2, otherScore);

let copyOfScore = [...score];
copyOfScore[0] = 50;
console.log("score: ", score);
console.log("copyScore: ", copyOfScore);
























