// const fs = require("fs"); // fs 모듈 추가
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').toString().trim().split('\n');

let index = 0;
const TC = parseInt(input[index++]);

let result = '';
for (let i = 0; i < TC; i++) {
    index++; // 빈 줄 스킵
    const [N, M] = input[index++].split(' ').map(Number);

    let Smax = Math.max(...input[index++].split(' ').map(Number));
    let Bmax = Math.max(...input[index++].split(' ').map(Number));

    if (Smax > Bmax) result += 'S\n';
    else if (Bmax > Smax) result += 'B\n';
    else result += 'S\n';
}

console.log(result.trim());


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', (line) => {
//     input.push(line);
// }).on('close', () => {
//     let index = 0;
//     const TC = parseInt(input[index++]);
     
//     let result = '';
//     for (let i = 0; i < TC; i++) {
//         index++; // 빈 줄 스킵
//         const [N, M] = input[index++].split(' ').map(Number);

//         let Smax = Math.max(...input[index++].split(' ').map(Number));
//         let Bmax = Math.max(...input[index++].split(' ').map(Number));

//         if (Smax > Bmax) result += 'S\n';
//         else if (Bmax > Smax) result += 'B\n';
//         else result += 'S\n';
//     }
//     console.log(result.trim());
// });
