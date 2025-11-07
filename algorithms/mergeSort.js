function mergeSort(input,size){
    if(size<=1) return input

    let mid=Math.floor(size/2);

    let leftArr= input.slice(0,mid)
    let rightArr= input.slice(mid)

    let left=mergeSort(leftArr,leftArr.length)
    let right=mergeSort(rightArr,rightArr.length)

    return merge(left,right);
}

function merge(left,right){
    let result=[]
    let i=0,j=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    return [...result,...left.slice(i),...right.slice(j)]
}

console.log(mergeSort([4,5,2,7,1,2],6));



