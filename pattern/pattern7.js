let prompt = require("prompt-sync")();
let n = prompt("enter the number ");

for (let i = 1; i <= n; i++) {
  //inverted triangle
  for (let j = n; j >= i; j--) {
    process.stdout.write(" ");
  }
  //right angel
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
