const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.trim());
}).on('close', function () {
    let [n, m] = input[0].split(' ').map(Number);
    let box = input[1].split(' ').map(Number);
    let book = input[2].split(' ').map(Number);

    let x = 0;

    for (let i = 0; i < m; i++) {
        while (true) {
            if (box[x] < book[i]) {
                x++;
            } else {
                box[x] -= book[i];
                break;
            }
        }
    }

    let sum = box.reduce((acc, val) => acc + val, 0);
    console.log(sum);
});
