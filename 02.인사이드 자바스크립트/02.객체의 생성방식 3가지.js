//자바스크립트에서 객체의 생성방식은 총 3가지 

// 1. 생성자 함수 이용 Object();

// Object()를 이용해서 obj에 빈값을 생성
var obj = new Object();

obj.name = 'kimseyoung';
obj.age = 30;
obj.birthday = '1994-03-09'

//2. 객체 리터럴 이용 객체 리터럴이란 자바스크립트에서 생성자를 사용하지않고 만들수있는 강력한 문법

var obj = {
  name: 'kimseyoung',
  age: 30,
  birthday: '1994-03-09'
}

//3. 생성자 함수를 이용하는법
var obj = {
  name: 'kimseyoung',
  age: 30,
  birthday: '1994-03-09'
}

// console.log(obj.name)
//['name']을 사용하는 이유는 자바스크립트에서 객체에서 호출가능한 toString()이라는 메소드가 자동 실행되기 때문
// console.log(obj['name'])

//undefined - undefined의 연산값은 NaN이다.

var forTest = {
  name: 'kimseyoung',
  age: 30,
  birthday: '1994-03-09'
}

//for in 문을 사용하면 객체의 프로퍼티를 출력할수있다.
var binObj;
for(binObj in forTest) {
  console.log(binObj, forTest[binObj])
}
//delete 연산자는 객체의 프로퍼티를 삭제할뿐 객체 자체를 삭제하지 못한다.





