let user = { name: "berkay", isActive: true};
console.log(user);
// localStorage.setItem('userInfo' , user ); yaparsan eger Objenin icindeki bilgilere ulaşamazsın.
localStorage.setItem('userInfo' , JSON.stringify(user) );

let userBilgisi = localStorage.getItem('userInfo');
userBilgisi = JSON.parse(userBilgisi);
// Local Storage'ye stringify yaptıgımız jsonu , geri parse etmezsek eger içerisindeki içerikler String ifade seklinde kalır.
console.log(userBilgisi);
