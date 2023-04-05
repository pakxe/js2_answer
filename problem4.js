// 4번 문제.

let user = {
  Name: '지환',
  years: 23,
};

let {Name, years : age, isAdmin} = user;

alert(Name); // "지환"
alert(age); // 23
alert(isAdmin || false); // false
