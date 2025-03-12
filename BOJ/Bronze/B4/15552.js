// 제출시
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');
// input.txt 기준이 B4안에서 input.txt를 찾음 그래서 오류 계속 떳음;

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);


// const fs = require('fs');

// try {
//     let input = fs.readFileSync('예제.txt', 'utf-8').trim().split('\n');
//     let count = Number(input[0]);
//     let results = [];

//     for (let i = 1; i <= count; i++) {
//         let [a, b] = input[i].split(" ").map(Number);
//         results.push(a + b);
//     }

//     console.log(results.join("\n"));
// } catch (error) {
//     console.error("파일을 읽는 중 오류가 발생했습니다:", error.message);
// }




