//With a single integer as the input, generate the following until a = x
function generateSequence(x){
    let result=[];
    let count= x%2===0 ? x-1:x; //if even
    for(let i=0;i<count;i++){
        result.push(2*i+1);//if odd
    }
    return result;
} 


console.log(generateSequence(5)); 
// [1, 3, 5]=output
console.log(generateSequence(10));
 // [1, 3, 5, 7, 9]=output
console.log(generateSequence(11));
// [1, 3, 5, 7, 9]=output
