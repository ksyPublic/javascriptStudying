const add = function (a, b) {
  return a + b
}

add.result = function (a, b) {
  return a * b
}

add.multiple = add.result(4, 6)

const add2 = (a, b) => {
  return a + b
}

// 함수를 인자로 받아서 실행하는 함수
const performOperation = (operation, x, y) => {
  return operation(x, y)
}

const resultAddition = performOperation(add2, 4, 5)

const sample = (factor) => {
  return (x) => x * factor
}

const sample2 = sample(4)

const sample3 = sample2(2)

console.log('!!!!', sample3)
