// DSA


// let numbers = [3,1,4,1,5]

// console.log(numbers[2]) // index of number 2 

// numbers.push(6);

// console.log(numbers)

// numbers.pop()

// console.log(numbers)

// numbers.forEach(num => console.log(num * 2));


// find max

let arr = [3,1,4,1,5];

let max = arr[0]

for (let i = 1; i < arr.lenght; i++) {
    if (arr[i] > max) max = arr[i];
}

console.log(max)