// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback('data download done!');
//     }, 5000);
// }



// setTimeout(() => {
//     console.log('Timer is done !');
//     fetchData(text => {
//         console.log(text);
//     })
// }, 7000);

// console.log("Hello");
// console.log("Hi!!!");



const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data download done!');
        }, 5000);
    })
    return promise
}



setTimeout(() => {
    console.log('Timer is done !');
    fetchData()
        .then(text => {
            console.log(text)
                return fetchData();
        }
    )
        .then(text2 => {
            console.log(text2);
    })
    
}, 7000);

console.log("Hello");
console.log("Hi!!!");