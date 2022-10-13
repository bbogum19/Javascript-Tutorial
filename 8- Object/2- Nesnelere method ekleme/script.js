let user1 = {
    name: "berkay",
    surname: "bogum",
    age: 22,
    score: [1, 2, 3, 4], // Objenin icersinde bir tane daha obje veya array saklanabilinır.
    isActive: true,
    fullName: function () {
        return `${this.name[0].toUpperCase()}. ${this.surname[0].toUpperCase()}${this.surname.slice(1)}`
    }
}

console.log(user1);
console.log(user1.fullName());