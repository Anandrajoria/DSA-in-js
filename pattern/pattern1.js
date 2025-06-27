/*  //! below code is used for pattern printing
let prompt=require('prompt-sync')()
let a = prompt("enter a number ");
process.stdout.write(a)
*/

let prompt = require("prompt-sync")();
let n = prompt("enter a number ");

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
