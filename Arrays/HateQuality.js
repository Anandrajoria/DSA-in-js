function solve(n , s){
    let first=s[0];

    let allSame=true;

    for(let c of s){
        if(c!==first){
            allSame=false
            break
        }
    }

    return allSame?0:1;
}
console.log(solve('3','aba'));
