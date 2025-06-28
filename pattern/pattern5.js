let prompt = require("prompt-sync")();
let n = prompt("enter the number ");

for (let i = 1; i <= n; i++) {
  let ch = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ch));
    ch++;
  }
  console.log();
}

/*
A
AB
ABC
ABCD
*/