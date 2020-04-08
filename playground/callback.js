setTimeout(() => {
    console.log('2 sec over');
}, 2000);

// const geocode = (address,callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             long: 0
//         }

//         return data;
//     }, 2000);
// } 

// const res = geocode('bhopal');
// console.log(res);

// IN this case we have a async function call inside 
// the function that we are trying to get value of in res.
// Although, we have a return statement, we do not get
// a value since it does not wait for setTimeout to finish
// and hence undefined get assigned.

// So remember, wheneverwe have async call in a function,
// always use a callback function.


// from this point, we demonstrate, how to use callback
// in async in functions with async requests 

const geocode = (address,callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0,
            address: address
        }

        callback(data);
    }, 2000);
} 

geocode('bhopal',(data) => {
    console.log(data);
});

const add = (a,b,callback) => {
    setTimeout(() => {
        const sum = a+b;
        callback(sum);
    },2000)
}

add(1,4,(sum) => {
    console.log('sum: ',sum);
})