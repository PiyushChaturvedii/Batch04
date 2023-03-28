// var name = "Shyam";
// var age = 35;
// var hasHobbies = false;

// function summarizeUser(userName,userAge,userHasHobby) {
//     return (
//         'Name is ' +
//         userName +
//         ', age is ' +
//         userAge +
//         ' and the user has hobbies: ' +
//         userHasHobby
//     );
// }

// console.log(summarizeUser(name, age, hasHobbies));

// const person = {
//     name: 'Ram',
//     age: 29,
//     greet(){
//         console.log('Hi, I am '+ this.name);
//     }
// };

// person.greet();



// const person = {
//     name: 'Ram',
//     age: 29,
//     greet(){
//         console.log('Hi, I am '+ this.name);
//     }
// };

// const hobbies = ['Sports', 'Cooking']

// for (let hobby of hobbies) {
//     console.log(hobby);
// }


// const arr1 = (hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies[1]);
// console.log(arr1[1]);
// console.log(arr1);

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = hobbies.slice();
// const copiedArray = hobbies;
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return(args)
// }

// console.log(toArray(1,2,3,4));


const person = {
    name: 'Ram',
    age: 29,
    greet(){
        console.log('Hi, I am '+ this.name);
    }
};
// const person1 = {
//     name: 'Shyam',
//     age: 30,
//     greet(){
//         console.log('Hi, I am '+ this.name);
//     }
// };

// var print = person.name
// console.log(print);

// const printName = ({name}) => {
//     console.log(name);
// }

// printName(person1);

// const{name,age} = person
// console.log(name, age);

// const hobbies = ['Sports', 'Cooking']
// const [h1, h2] = hobbies;
// console.log(h1);
// console.log(h2);