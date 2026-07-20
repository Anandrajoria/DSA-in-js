function isDivisiableBy13(str){
    let rem=0

    for(let ch of str){
        let digit=ch.charCodeAt(0)-'0'.charCodeAt(0)
        rem=(rem*10+digit)%13
    }
    return rem==0
}
console.log(isDivisiableBy13('2911285'));
