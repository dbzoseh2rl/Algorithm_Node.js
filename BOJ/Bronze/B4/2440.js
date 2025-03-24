const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n')

let n = parseInt(input[0]);

for(let i = n; i > 0; i--){
    let stars = '*'.repeat(i);
    let spaces = ' '.repeat(n-i);
    console.log(stars+spaces);
}