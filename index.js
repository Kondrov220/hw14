const man = [
    {name: "Mango", eyeColor: "green", gender: "male", isActive: true, email: "mango@gmail.com", age: 18},
    {name: "Poly", eyeColor: "blue", gender: "female", isActive: false, email: "poly@gmail.com", age: 20},
    {name: "Kiwi", eyeColor: "green", gender: "male", isActive: false, email: "kiwi@gmail.com", age: 20},
    {name: "Ajax", eyeColor: "braun", gender: "male", isActive: true, email: "ajax@gmail.com", age: 19},
    {name: "Chelsy", eyeColor: "blue", gender: "female", isActive: false, email: "chelsy@gmail.com", age: 22},
    {name: "Magge", eyeColor: "braun", gender: "female", isActive: true, email: "magge@gmail.com", age: 21}
]
//1
const allMan = man.map((mans) => mans.name);
console.log(allMan);
//2
const greenEye = man.filter(mans => mans.eyeColor === "green");
console.log(greenEye);
const braunEye = man.filter(mans => mans.eyeColor === "braun");
console.log(braunEye);
const blueEye = man.filter(mans => mans.eyeColor === "blue");
console.log(blueEye);
//3
const allMale = man.filter(mans => mans.gender === "male");
console.log(allMale);
const allFemale = man.filter(mans => mans.gender === "female");
console.log(allFemale);
//4
const active = man.filter(mans => mans.isActive === false);
console.log(active);
//5
const emailOne = man.find(mans => mans.email === "kiwi@gmail.com");
console.log(emailOne);
//6
const allAge = man.filter(mans => mans.age > 19 && mans.age < 21);
console.log(allAge);