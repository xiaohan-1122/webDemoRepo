let name = "xiaoming"
let age = 12
let flag = true

function sum1(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum1(20, 30));
}

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  run() {
    console.log(this.name + ' run----------------');
  }
}

// 1.导出方式一
export {
  flag, sum1, Person1
}

// 2.导出方式二
export let num1 = 1000;
export let height = 1.88;
export function sum2(num1, num2) {
  return num1 + num2;
}
export class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  run() {
    console.log(this.name + ' run----------------');
  }
}

// 3.export default
// 某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而是让导入者自己来命名，同一个模块中default只能有一个
// const address = '山东省';
// export default address;
export default function test(){
  console.log('export default 导出函数');
}
