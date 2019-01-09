// function getTempCallback(location, callback){
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Bangalore', function(err, temp){
//     if(err){
//         console.log('error', err);
//     }else{
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location){
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Bangalore').then(function (temp){
//     console.log('promise success', temp);
// }, function (err){
//     console.log('promise error', err);
// })

//challenge Area
function addPromise(a, b){
    return new Promise(function (resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('A and B need to be numbers');
        }
    });
}

    addPromise(3,4).then(function (AnBsum){
        console.log('1 Success : ', AnBsum);
    }, function (err){
        console.log('1 Error : ', err);
    });

    addPromise('Aravind',4).then(function (AnBsum){
        console.log('2 Success : ', AnBsum);
    }, function (err){
        console.log('2 Error : ', err);
    });

    addPromise(4, 'Aravind').then(function (AnBsum){
        console.log('3 Success : ', AnBsum);
    }, function (err){
        console.log('3 Error : ', err);
    });

    addPromise('Aravind', 'Aravind').then(function (AnBsum){
        console.log('4 Success : ', AnBsum);
    }, function (err){
        console.log('4 Error : ', err);
    });