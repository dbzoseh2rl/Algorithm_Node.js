const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n');

let size = parseInt(input[0]);

const student = [];
for (let i = 1; i <= size; i++){
    student.push(input[i].split(' ').map(Number));
}

console.log(student)


// for (let i = 0; i< r1; i++) {
//     for (let j = 0; j < r1; j++) {
//         console.log("hello")
//     }
// }

