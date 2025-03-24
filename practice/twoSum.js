var twoSum=function(num,target){
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]+num[j]===target){
                return [i,j];
            }
        }
    }
}

let arr=[2,7,11,15]
let target=9;
console.log(twoSum(arr,target));
