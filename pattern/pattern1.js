/*
// for n=4 
****
****
****
****
*/

let prompt = require("prompt-sync")();
let n = prompt("enter a number ");

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}


/*  

let prompt=require('prompt-sync')()
let a = prompt("enter a number ");
process.stdout.write(a)

//!  code is used for getting input from the user
*/
