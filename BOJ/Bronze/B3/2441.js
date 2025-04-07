// // const fs = require("fs"); // fs 모듈 추가
// // const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = require('fs')
//     .readFileSync('input.txt')
//     .toString()
//     .trim()
//     .split('\r\n');

// const N = parseInt(input[0]);
// // console.log(N)

// for(let i = 0; i < N; i++){
//     console.log(" ".repeat(i) + "*".repeat(N-i));
// }



// Method Chaning 방식 
// // const fs = require("fs"); // fs 모듈 추가
// // const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [input] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n');
const N = parseInt(input);  

// Array.from을 사용하여 길이 N의 배열을 생성하고,
// map과 forEach를 체인하여 패턴을 출력합니다.
Array.from({ length: N })
  .map((_, i) => " ".repeat(i) + "*".repeat(N - i))
  .forEach(line => console.log(line));