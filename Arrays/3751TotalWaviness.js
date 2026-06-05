
function totalWaviness(num1,num2){
    let total=0;

    for(let i=num1;i<=num2;i++){
        let digit=String(i);

        for(let i=1;i<digit.length-1;i++){
            if((digit[i]>digit[i-1] && digit[i]>digit[i+1])|| (digit[i]<digit[i-1]&& digit[i]<digit[i+1])){
                total+=1
            }
        }
    }
    return total
}

console.log(totalWaviness(120,130));
