// 2번 문제.

let lionMoney = {
  상혁: 20000,
  유선: 8300,
  주용: 2800,
  맑음: 50000,
};

let sum = 0;

for(let name in lionMoney) {
  sum += lionMoney[name];
}

alert(sum);
