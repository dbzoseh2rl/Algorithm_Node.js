// const fs = require("fs"); // fs 모듈 추가
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split("\n") // 줄바꿈 기준으로 나누기
    .map(line => line.trim()); // 각 줄에서 '\r' 제거


// 위 코드에서 인풋이 들어오면
// input = ["14 30 0", "200"] 일케됨

let [h, m, s] = input[0].split(" ").map(Number); // 시, 분, 초 입력
// console.log(h, m, s)
let t = Number(input[1]); // 추가할 초 입력
// console.log(t)

// 초 계산
s += t;
m += Math.floor(s / 60);
h += Math.floor(m / 60);

// // 24시간 형식 유지
// console.log(h % 24, m % 60, s % 60);