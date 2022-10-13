let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault()
    console.log("Sayfanın yenilenmesi engellendi");

    let scoreInputDOM = document.querySelector("#score");
    console.log(`Girmiş oldugunuz sayı: ${scoreInputDOM.value}`);

    localStorage.setItem("score" , scoreInputDOM.value);
}