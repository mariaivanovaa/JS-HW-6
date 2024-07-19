// 1
let i = 1
while (i <= 10) {
    console.log(i);
    i += 1;
}

// 2
for (let a = 2; a <= 20; a++) {
    if (a % 2 === 1) {
        continue;
    } else {
        console.log(a);
    }
}

// 3
const seven = 7;
for (let b = 1; b <= 10; b++) {
    console.log(seven * b)
}

// 4
const array = [1, 2, 3, 4, 5]
 let c = 0;
while (c < array.length) {
    console.log(array[c])
    c++
}

// 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let d = 0; d < numbers.length; d++) {
    if (numbers[d] === 7) {
        break;
    }
    console.log(numbers[d]);
}

// 6
const number = 10
let e = 1
while (e <= number) {
    console.log(e)
    e++
}

// 7
let f = 0
while (f < 20) {
    f++
    
    if (f % 3 === 0) {
        continue
    }
    console.log(f)
}