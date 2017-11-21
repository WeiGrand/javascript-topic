/*
 * @Author: heweiguang 
 * @Date: 2017-11-19 15:38:55 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-20 23:24:37
 */

//拷贝分为浅拷贝(对于对象与数组只复制引用), 和深拷贝(复制值)

const Type = require('../type/type');

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

function extend() {
    const length = arguments.length;
    let i = 1, 
        deep = false,
        target = arguments[0] || {};

    if(typeof target === 'boolean') {
        deep = target;
        i++;
        target = arguments[1] || {};
    }

    //对象和数组都可以
    if(typeof target !== 'object' && !Type.isFunction(target)) {
        target = {};
    }

    for(; i < length; i++) {
        const options = arguments[i];
        let clone, copyIsArray;

        if(options) {
            for(let name in options) {
                const copy = options[name],
                      src = target[name];

                //避免循环引用      
                if(target === copy) {
                    continue;
                }

                //如果copy是对象，src不是对象，就把src初始化为{}
                //如果copy是数组，src不是数组，就把src初始化为[]
                if(deep && copy && ( Type.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)) )) {

                    if(copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }else {
                        clone = src && Type.isPlainObject(src) ? src : {};
                    }
                    
                    target[name] = extend(deep, clone, copy);
                }else if(copy) {
                    target[name] = copy;
                }
            }   
        }
    }

    return target;
}

module.exports = {
    shallowCopy,
    deepCopy,
    extend
}
