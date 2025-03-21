const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = 0;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            const sum = arr[i] + arr[j] + arr[k];
            if (sum <= M) {
                result = Math.max(result, sum);
            }
        }
    }
}

console.log(result);

// const fs = require('fs');
// const inputs = fs
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((it) => it.split(' ').map(Number));
// const [n, m] = inputs[0];
// const cards = inputs[1].sort((a, b) => a - b);

// let ans = 0;

// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     for (let k = j + 1; k < n; k++) {
//       const sum = cards[i] + cards[j] + cards[k];
//       if (sum <= m && ans < sum) ans = sum;
//     }
//   }
// }

// console.log(ans);