function pattern1(n) {
  for (let i = 0; i <= n; i++) {
    let str = "";

    for (let col = 1; col <= n; col++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern1(4)
