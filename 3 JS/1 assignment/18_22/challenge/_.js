let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// 11 + 20 + 80 - 11                       a=12, b=21, c=81
// 13 + -21 + 81 - -13 + 14                a=14, b=21, c=82
// 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1    a=12, b=22, c=81
// 100
