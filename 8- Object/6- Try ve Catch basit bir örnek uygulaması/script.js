let dogumTarihiDOM = document.querySelector("#dogumTarihi");

function calisacakFonk() {
    try {
        if (dogumTarihiDOM.value == "") {
            throw 'Doğum tarihini boş geçemezsiniz'; // throw ile kendi hata mesajımızı olustururuz.
        };
    } catch (error) {
        alert(error)
    }
}