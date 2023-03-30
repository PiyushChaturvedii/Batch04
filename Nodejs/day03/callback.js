// const funA = () => {
//     setTimeout(() => {
//         console.log("Function 1 run...");
//     }, 3000);
// }

// const funB = () => {
//     console.log('Function 2 run ...')
// }

// funA();
// funB();





// const fun1 = (name1,callback) => {
//     setTimeout(() => {
//         console.log(`My name is ${name1}.`);
//         callback();
//     }, 3000);
// }

// const fun2 = () => {
//     console.log('function 2')
// }

// fun1('Ram',fun2);
// fun2();


//API

// 1: 2s student roll
// 2: 2s 2nd name and age
// 3: 2s gender

// const getRollNo = () => {
    //     setTimeout(() => {
        //         console.log('Roll No. found.');
//         let roll_no = [1, 2, 3, 4, 5];
//         console.log(roll_no);

//         setTimeout((roll_no) => {
//             const data = {
//                 name: 'Ram',
//                 age: 30
//             }
//             console.log(`My roll no is ${roll_no}. My name is ${data.name} and I am ${data.age} years old.`)
            
//             setTimeout((name) => {
//                 data.gender = 'male';
//                 console.log(`My roll no is ${roll_no}. My name is ${data.name} and I am ${data.age} years old. I am ${data.gender}`)
//             }, 2000, data.name);
            
//         }, 2000, roll_no[2]);
        
//     }, 2000);
// }

// getRollNo();
        


// API
        // 1: 2s student roll
        // 2: 2s 2nd name and age
        // 3: 2s gender


// promise produce
// const pobj1 = 
        
        // promise consume



// const getdata = (indexdata) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((indexdata) => {
//             let data = {
//                 name: 'Ram',
//                 age: 30
//             }
//             resolve(`My roll no is ${indexdata}.My name is ${data.name} and I am ${data.age} years old.`)
//         }, 2000, indexdata);
//     })
//         }



// pobj1.then((roll_no) => {
//     console.log(roll_no);
// }).catch((error) => {
//     console.log(error);
// })