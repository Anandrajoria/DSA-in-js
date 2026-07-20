// function lcm(a,b){
//     // let g=Math.max(a,b)
//     // let s=Math.min(a,b)

//     let s,g
//     if(a>b){
//         g=a
//         s=b
//     }else{
//         g=b
//         s=a
//     }

//     for(let i=g;i<=a*b;i+=g){
//         if(i%s==0){
//             return i
//         }
//     }
//     return a*b
// }
// console.log(lcm(10,5));


function gcd(a,b){
    return b==0?a:gcd(b,a%b);
}
function lcm(a,b){
return (a/gcd(a,b))*b
}

console.log(lcm(11,5));

function gcd2(a,b){
    return 
}
