// Get the total count of numbers listed in the dictionary which are multiples of [1,2,3,4,5,6,7,8,9]
function getMultipleCount(dictionary) {
    const res = {};
    for (let i = 1; i <= 9; i++) {
        let count = 0;
        for (let num of dictionary) {
            if (num % i === 0) {
                count++;
            }
        }
        res[i] = count;
    }
    return res;
}

const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = getMultipleCount(input);
console.log(output);





//  use the reduce method
function getMultipleCountWithReduce(dictionary) {
    const res = {};
    for (let i = 1; i <= 9; i++) {
        res[i] = dictionary.reduce((count, num) => count + (num % i === 0 ? 1 : 0), 0);
    }
    return res;
}

console.log(getMultipleCountWithReduce(input));