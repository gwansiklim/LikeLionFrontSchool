// 최대값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
    if (temp < sample[i]) {
        temp = sample[i];
    }
}
console.log(temp);

//최소 값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
    if (temp > sample[i]) {
        temp = sample[i];
    }
}
console.log(temp);

// 2자씩 결과 값 나오게 하기

let text = 'javascript';

for (let i = 1; text.length; 1++) {
    console.log(text[i - 1], text[i]);
}