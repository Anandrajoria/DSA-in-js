function findSecondLargest(nums){
    let largest=-Infinity
    let secondLargest=-Infinity

    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            secondLargest=largest
            largest=nums[i]
        }else if(nums[i]<largest && nums[i]>secondLargest){
            secondLargest=nums[i]
        }
    }
    return secondLargest==-Infinity ? -1:secondLargest
}

console.log(findSecondLargest([10,10,10]));
