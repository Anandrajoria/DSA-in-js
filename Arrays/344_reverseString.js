let s = ["h", "e", "l", "l", "o"];

// function reverseString(s) {
//   let len = s.length;
//   let halflen = Math.floor(len / 2);

//   for (let i = 0; i < halflen; i++) {
//     let temp = s[i];
//     s[i] = s[len - 1 - i];
//     s[len - 1 - i] = temp;
//   }
//   return s;
// }
// console.log(reverseString(s));



//! whithout third varible

function reverseString(s){
    let left=0;
    let right=s.length-1

    while(left<right){
        [s[left],s[right]]=[s[right],s[left]]
        left++
        right--
    }
    return s

}
console.log(reverseString(s));