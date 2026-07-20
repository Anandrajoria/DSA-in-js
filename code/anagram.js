function isAnagram(s,t){
    if(s.length!==t.length){
        return false
    }
    let map={}

    for(let ch of s){
        if(!map[ch]){
            map[ch]=1
        }else{
            map[ch]++
        }
    }

    for(let ch of t){
        if(!map[ch]||map[ch]<0){
            return false
        }else{
            map[ch]--
        }
    }
    return true
}

console.log(isAnagram("anagram",'marana'));
