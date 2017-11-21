const Max = require('./max');

const array = [6, 4, 1, 8, 2, 11, 23];

//test 原始方法
console.log(Max.max1(array));

//test reduce 法
console.log(Max.max2(array));

//test 排序法
console.log(Max.max3(array));

//test eval 法
console.log(Max.max4(array));

//test apply 法
console.log(Max.max5(array));

//test ES6 法
console.log(Max.max6(array));
