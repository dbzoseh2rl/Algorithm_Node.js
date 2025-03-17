const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n');

console.log(input);

const N = parseInt(input);

for (let i = 1; i <= N; i++){
    console.log("*".repeat(i));
}

