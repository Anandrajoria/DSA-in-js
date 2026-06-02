let num=123456

function digitCount(num){
    if(num===0) return 1;

    num=num<0?-num:num

    let count=0

    while(num>0){
        count++
        num=Math.floor(num/10)
    }
    return count
}
console.log(digitCount(num));
