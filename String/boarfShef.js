function boardShef(No, k, str){
    let freq={};

    for(let c of str){
        freq[c]=(freq[c]||0)+1;
        if(freq[c]>=k)
            return 1;


    }
    return 0;

}
console.log(boardShef(5,2,'acdab'));