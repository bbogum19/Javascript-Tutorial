const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

// Ürünlerin isimleri 5 harften fazla olanları yeni bir listeye at.
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5);
console.log(NEW_PRODUCTS);

// Aktif kullanıcıları ayıkla
const USERS = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
];

const ACTIVE_USERS = USERS.filter(user => user.isActive);
// const ACTIVE_USERS = USERS.filter(user => user.isActive === true);
console.log(ACTIVE_USERS);
