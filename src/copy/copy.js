/*
 * @Author: heweiguang 
 * @Date: 2017-11-19 15:38:55 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-20 10:30:03
 */

//拷贝分为浅拷贝(对于对象与数组只复制引用), 和深拷贝(复制值)

//数组的浅拷贝
//1 原生 concat、slice
//2 遍历对象
function shallowCopy(obj) {
    if(typeof obj !== 'object') {
        return;
    }

    //判断属于数组还是对象
    const newObj = obj instanceof Array ? [] : {};

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

//数组的深拷贝 
//1 黑魔法 const new_array = JSON.parse(JSON.stringify(arr));
//2 较低性能的实现
function deepCopy(obj) {
    if(typeof obj !== 'object') {
        return;
    }

    const newObj = obj instanceof Array ? [] : {};

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }

    return newObj;
}

function extend(obj) {
    
}

module.exports = {
    shallowCopy,
    deepCopy,
    extend
}
