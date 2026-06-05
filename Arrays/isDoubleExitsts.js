let arr=[10,2,7,5]

function isDoubleExists(arr){
    let seen=new Set()

    for(let num of arr){
        if(seen.has(2*num) || (num%2===0 && seen.has(num/2))){
            return true
        }
        seen.add(num)
    }

    return false
}
console.log(isDoubleExists(arr));
