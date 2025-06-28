/*

*****
****
***
**
*


*/

let prompt = require("prompt-sync")();
let n = prompt("enter the number ");

for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("*");
  }
  console.log();
}
