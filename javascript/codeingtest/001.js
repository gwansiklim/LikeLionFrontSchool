//2진법과 8진법으로 바꾸는 방법
let x = 9;
let y = 30;

x.toString(2);
x.toString(8);

let z = '11111';
z.replace(/1/g, '#').replace(/0/g, '');

//2진법으로 변환을 하고 1이면 #으로 바꾸고 0이면 공백으로 해준다.
(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(9 & 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(5 | 3).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(31 | 14).toString(2).replace(/1/g, '#').replace(/0/g, ' ');