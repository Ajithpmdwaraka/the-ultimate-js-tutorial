// There are three types of scope in javascript, Global Scope, Function Scope and Block Scope

// GlobalScope - Variables declared inside the Global Scope can be accessed from anywhere in the program
var x = "Hello Javascript"
function example() {
    console.log(x);
}
example();

console.log(x);
 
// Function Scope - Varibales and functions inside a function are said to be in the Function Scope, they can only be accessed inside that function

function add() {
    var a = "Hi"
    console.log(a);
}
add();
console.log(a); 
// Here it will show Reference error, as the varible a can only be accessed inside the function, since it is declared in the function scope

// Block Scope means statements inside a block of code which is enclosed by a curly BroadcastChannel, variables and functions decalred inside this block scope can only be accrsed within that scope

function sayHi(){
    if (true) {
        let b = "Hey JavaScript"
        console.log(b);
    }
    console.log(b);     
}
sayHi();

// Here the console.log(b); written outside the blockScope will throw an ReferenceError, because we cannot access the variable b from outside the block scope { }

