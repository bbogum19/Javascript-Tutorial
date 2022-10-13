let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault()
    // bu method ile form butonuna tıkladıgımız zaman sayfanın yenilenmesini ve console'daki yazının devamlı olarak görülmesini sagladık
    // Butonun type'ı submit oldugu icin normalde butona tıkladıgımız zaman sayfanın urlsinin sonuna "scoreName = .." gibi bir seyler ekleniyor(inputun name adı) ama bu methodu yazarak onunda onune gecmis olduk. 
    console.log("Sayfanın yenilenmesi engellendi");
}