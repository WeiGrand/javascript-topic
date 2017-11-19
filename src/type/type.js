/*
 * @Author: heweiguang 
 * @Date: 2017-11-19 13:08:54 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-19 13:21:51
 */

 const class2type = {};
 const toString = Object.prototype.toString;

 "Boolean Number String Function Array Date RegExp Object Error Null Undefined"
    .split(' ')
    .map(item => {
        class2type[`[object ${item}]`] = item.toLowerCase();
    });

 function type(obj) {
    //IE6 null 和 undefined 会被 Object.prototype.toString 识别为 [object Object]
    //undefined == null => true
    //null == null => true
    if(obj == null) {
        return obj += '';
    }

    return typeof obj === 'object' || typeof obj === 'function' ? //除了 object 和 function 外其它类型可以直接由 typeof 得到
            class2type[toString.call(obj)] || 'object' :
            typeof obj;
 }

 module.exports = {
     type
 }
