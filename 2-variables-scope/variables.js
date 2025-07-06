// Variables are used to store data, the variables are declared using three keywords var let and const


var x = 4;
console.log(x);

// The varible declared using let can only be accessed within its block-scope
if (x > 5) {
    let y = 6;
}
console.log(y);
// Here it will shows a Reference Error

// The variable declared using const cannot be reassigned
const a = 6;
console.log(a);
a = 23;
console.log(a);
// Here it will show a type error

