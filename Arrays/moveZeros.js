let nums=[0,1,0,3,12]

function moveZeros(nums){
    let p=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[i]
            nums[i]=nums[p]
            nums[p]=temp
            
            p++
        }
    }
    return nums
}

console.log(moveZeros(nums));
