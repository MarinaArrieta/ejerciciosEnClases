// // Ejercicio 1 hecho en ------------ CLASES
// const person = {
//     name: 'Yuki',
//     age: 3
// }

// // Object Destructuring
// const { name, age } = person;

// console.log(`Holis ${name} de ${age} years!`)

// // Ejercicio 2
// const car = {
//     brand: 'coche',
//     model: 12
// }

// const {brand:marca, model:modelo} = car;

// console.log(`Auto: ${marca} de la marquilla: ${modelo}`);

// // Ejercicio 3
// const person = {
//    name: 'Yuki',
//    age: 3,
//    address:{
//     city: 'Saenz Peña'
//    }
// }

// const { name, age, address } = person;

// console.log(`Holis ${name} de ${address.city}!`)

// // Ejercicio 4
// const person = {
//    name: 'Yuki',
//    age: 3,
//    address:{
//     city: 'Saenz Peña'
// }
// }

// function printName(person){
//     console.log(person.name);
// }

// printName(person);

// // Ejercicio 5
// const user={
//     name: 'Haru',
//     age: 2
// }

// function printInfo(user){
//     const { name, age} = user;
//     console.log(`Nombre: ${name}, edad ${age}`);
// }

// printInfo(user);

// // Ejercicio 6
// let array = [1,2,3];
// let array2 = [...array, 4,5,6];
// console.log(array2);



// function incrementAge(person){
//     new_person = {
//         name: person.name,
//         age: person.age+1,
//         address:{
//             city: person.address.city
//         }
//     }
//     return new_person;
// }


// Object.freeze(person)
// person2 = incrementAge(person)
// console.log(person2)


// Ejercicio 7
function sum(...numero){
    return numero.reduce((prev, next)=>{return prev+next}, 0)
}

// sum(2, 3, 4,5,6)
console.log(sum(2, 3, 4,5,6))