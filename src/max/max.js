/*
 * @Author: heweiguang 
 * @Date: 2017-11-21 22:21:46 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-21 22:34:42
 */

 //求数组最大值与最小值

//1 原始方法
function max1(array) {
    let result = array[0];

    for(let i = 1; i < array.length; i++) {
        result = Math.max(result, array[i]);
    }

    return result;
}

//2 reduce 法
function max2(array) {
    return array.reduce(function(prev, next) {
        return Math.max(prev, next);
    });
}

//3 排序法
function max3(array) {
    array.sort(function(a, b) {
            return b - a;
    });

    return array[0];
}

//4 eval 法
function max4(array) {
    return eval('Math.max(' + array + ')');
}

//5 apply 法
function max5(array) {
    return Math.max.apply(null, array);
}

//6 ES6 法
function max6(array) {
    return Math.max(...array);
}

module.exports = {
    max1,
    max2,
    max3,
    max4,
    max5,
    max6
}
