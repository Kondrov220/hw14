const people = [
    {name: "peoplego", eyeColor: "green", gender: "male", isActive: true, email: "peoplego@gmail.com", age: 18},
    {name: "Poly", eyeColor: "blue", gender: "female", isActive: false, email: "poly@gmail.com", age: 20},
    {name: "Kiwi", eyeColor: "green", gender: "male", isActive: false, email: "kiwi@gmail.com", age: 20},
    {name: "Ajax", eyeColor: "braun", gender: "male", isActive: true, email: "ajax@gmail.com", age: 19},
    {name: "Chelsy", eyeColor: "blue", gender: "female", isActive: false, email: "chelsy@gmail.com", age: 22},
    {name: "Magge", eyeColor: "braun", gender: "female", isActive: true, email: "magge@gmail.com", age: 21}
]
//1
const allPeople = people.map((person) => person.name);
console.log(allPeople);
//2
const greenEye = people.filter(person => person.eyeColor === "green");
console.log(greenEye);
const braunEye = people.filter(person => person.eyeColor === "braun");
console.log(braunEye);
const blueEye = people.filter(person => person.eyeColor === "blue");
console.log(blueEye);
//3
const allMale = people.filter(person => person.gender === "male");
console.log(allMale);
const allFemale = people.filter(person => person.gender === "female");
console.log(allFemale);
//4
const active = people.filter(person => person.isActive === false);
console.log(active);
//5
const emailOne = people.find(person => person.email === "kiwi@gmail.com");
console.log(emailOne);
//6
const allAge = people.filter(person => person.age > 19 && person.age < 21);
console.log(allAge);