function mergeList(a,b){
    let i=0,j=0
    let merged=[]
        while(i<a.length && j<b.length){
            if(a[i]<b[j]){
                merged.push(a[i])
                i++
            }else{
                merged.push(b[j])
                j++
            }
        }

        while(i<a.length) merged.push(a[i++])
        while(j<b.length) merged.push(b[j++])
    
            return merged;
}

console.log(mergeList([1,3,5],[2,4,6]));
