function HelloFunc(func) {
  this.greeting = 'hello'
}

HelloFunc.prototype.call = function (func) {
  func ? func(this.greeting) : this.func(this.greeting)
}

function saySomething(obj, methodName, name) {
  return function (greeting) {
    return obj[methodName](greeting, name)
  }
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name)
  return obj
}

newObj.prototype.who = function (greeting, name) {
  console.log(greeting + ' ' + (name || 'everyone'))
}

var objHello = new HelloFunc()
var obj1 = new newObj(objHello, 'zzoon')

console.log('!!!!', obj1)

const init = () => {}

const study = {
  init: init,
}

document.addEventListener('DOMContentLoaded', function () {
  study.init()
})
