// 1
let i = 1
while (i <= 10) {
    console.log(i);
    i += 1;
}

// 2
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 1) {
        continue;
    } else {
        console.log(1);
    }
}

// 3
const seven = 7;
for (let i = 1; i <= 10; i++) {
    console.log(seven * i)
}

// 4
const array = [1, 2, 3, 4, 5]
 let i = 0;
while (i < array.length) {
    console.log(array[i])
    i++
}

// 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        break;
    }
    console.log(numbers[i]);
}

// 6
const number = 10
let i = 1
while (i <= number) {
    console.log(i)
    i++
}

// 7
let i = 0
while (i < 20) {
    i++
    
    if (i % 3 === 0) {
        continue
    }
    console.log(i)
}