//while문

let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}

// 1~100까지 짝수 구하기

let i = 0;
while (i < 101) {
    result += 1;
    i += 2;
}

// do
let num = 0;

do {
    console.log(num);
    num += 1;
} while (num < 11);

//while문 구구단

let i = 2;
let j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    i++;
    j = 1;
}

// while문 구구단 5단에서 멈추게 하는 방법
let i = 2;
let j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        if (j == 5) {
            break;
        }
        j++;
    }
    i++;
    j = 1;
}