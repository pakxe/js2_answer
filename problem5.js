// 5번 문제.

let user = {
  name: "윤정",
  age: 20,
};

let userObjString = JSON.stringify(user);
let userObj = JSON.parse(userObjString);

console.log(userObj);

// 또는 
console.log(JSON.parse(JSON.stringify(user)));

/*
  alert 메서드의 인자는 문자열로 평가될 수 있는 값이어야하는데, 객체 자료형은 문자열로 평가될 수 없음
  그래서 출력시 [Object Object]로 이상하게 출력됐던 것
  잘 되었는지 확인하고 싶다면, 객체도 출력할 수 있는 console.log()메서드를 사용합니다.
*/
