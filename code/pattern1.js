//print n*n grid

function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    console.log(star);
  }
}
pattern1(4);
