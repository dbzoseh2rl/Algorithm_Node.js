// const fs = require("fs"); // fs 모듈 추가
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = require('fs')
    .readFileSync('input.txt', 'utf-8')
    .trim()
    .split("\n") // 줄바꿈 기준으로 나누기
    .map(Number); 

// console.log(input);
// console.log(input[0]);
const total = parseInt(input[0]);
// const vlaues = input.slice(1).map(Number); // 이러면 나머지값들을 배열로만듬
// console.log(vlaues);
const values = input.slice(1).map(Number);
// console.log(values);
// const values2 = input.slice(1);
// console.log(values2);
// values = .map(Number)를 했기때문에 숫자로된 배열로 반환됨
// values2 = 그냥 문자열 배열 그대로 유지됨

const sumvalue = values.reduce((acc,cur) => acc + cur, 0);
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }

// 위와 같이 for 문을 사용해도 되지만 Node에는 누적합을 나타내 주는 reduce가 있음
// reduce() 함수는 배열을 순회하면서 값을 누적(accumulate)하는 함수입니다.
// 원형 = array.reduce((accumulator, currentValue) => { ... }, initialValue);
// const sumvalue = values.reduce((acc,cur) => acc + cur, 0);
// reduce는 숫자를 반환해주기 때문에 굳이 parseInt안해도됨

console.log(total - sumvalue);


// // 비동기 방식
// const fs = require('fs').promises;

// async function processFile() {
//     try {
//         const data = await fs.readFile('input.txt', 'utf-8');
//         const input = data.trim().split("\n").map(Number);
        
//         const total = input[0];
//         const values = input.slice(1);
//         const sumvalue = values.reduce((acc, cur) => acc + cur, 0);
        
//         console.log(total - sumvalue);
//     } catch (err) {
//         console.error("파일을 읽는 중 오류 발생:", err);
//     }
// }

// processFile();

