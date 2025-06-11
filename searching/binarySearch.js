// this search follow divide and conqure rule
// this work on sorted arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ! step
//min=0   , element=1
//max= array.length-1  , element=15

// we have to find mid index
//minIdx=(min+max)/(0+14)=> 7(index) ,element=8


//if array[midIdx] < number(7)
// min=minIdx+1
// if array[midIdx] > number(7)
//max= minIdx-1, min= 0 , max=6 {1,2,3,4,5,6,7}

//  ( min+max)/2=>3
// index+1 => 4(min) , max=6 {5,6,7}

// (min+max)/2=5+1=>6(min)  , max=6
// else  minIdx=6, element=7


function BinarySearch(arr,num){
    let min=0
    let max=arr.length-1

    while(min<=max){
        let midIdx=Math.floor((min+max)/2)
        console.log(midIdx);
        
        if(arr[midIdx] < num){
            min=midIdx+1
        }else if(arr[midIdx] > num){
            max=midIdx-1
        }else{
            return midIdx
        }
    }
    return -1
}
console.log(BinarySearch(arr,7));


// time complextiy= binary =o(log n)