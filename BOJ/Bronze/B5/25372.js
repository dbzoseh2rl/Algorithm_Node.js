// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on("line", (line) => {
//     input.push(line);
// }).on("close", () => {
//     const T = parseInt(input[0]);
//     for (let i = 1; i <= T; i++) {
//         let passwordLength = input[i].length;
//         console.log(passwordLength >= 6 && passwordLength <= 9 ? "yes" : "no");
//     }
//     process.exit();
// });


//짜본코드
const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    let passwordLength = input[i].length;
    console.log(passwordLength >= 6 && passwordLength <= 9 ? "yes" : "no");
}
