// 1.导出方式一
import{flag, sum1, Person1} from './aaa.js'
if (flag) {
  console.log('小明是天才');
  console.log(sum1(10, 20));
  let p1 = new Person1('小一', 11);
  p1.run()
}

// 2.导出方式二
import {num1, height, sum2, Person2} from './aaa.js';
console.log(num1);
console.log(height);
console.log(sum2(11, 22));
let p = new Person2('小二', 5);
p.run()

// 3.export default
import ttt from './aaa.js'   // 导出aaa中默认导出的内容
ttt()

// 全部导入
import * as info from './aaa.js';
console.log(info.sum1(1, 2));
console.log(info.sum2(2, 2));