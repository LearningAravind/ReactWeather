var names = ['Aravind', 'Ashok', 'Anvekar'];

// names.forEach(function (name){
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log('min_arrow_Func', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Ashok'));

// var person = {
//     name: 'Aravind',
//     // greet: function(){
//     //     names.forEach(function (name){
//     //         console.log(this.name + ' says hi to '+ name)
//     //     });
//     // }
//     greet: function(){
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to '+ name)
//         });
//     }
// };

// person.greet();

//Challenge Area
function add(a, b){
    return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

// addStatement
var addStatement = (a,b) => {return 'addStatement '+(a+b)};
// addExpression
var addExpression = (a,b) => 'addExpression '+(a+b);

console.log(addStatement(1,3));
console.log(addExpression(9,0));