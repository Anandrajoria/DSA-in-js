
let prompt = require("prompt-sync")();
let n = prompt("enter the number:");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j+"");
  }
  console.log();
}

/*

1
12
123
1234
12345
*/
