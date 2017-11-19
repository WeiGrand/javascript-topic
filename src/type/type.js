/*
 * @Author: heweiguang 
 * @Date: 2017-11-19 13:08:54 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-19 15:20:29
 */

 const class2type = {};
 const toString = Object.prototype.toString;
 const hasOwn = Object.prototype.hasOwnProperty;

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

 /**
  * 判断一个对象是否由 {} 或 new Object 的方式创建
  * @param {*} obj 
  */
 function isPlainObject(obj) {
    let proto, 
        Ctor;

    if(!obj || toString.call(obj) !== '[object Object]') {
        return false;
    }

    proto = Object.getPrototypeOf(obj); //原生获取 obj 的原型的方法

    //没有原型代表是 plain object
    if(!proto) {
        return true;
    }

    //如果是 Object 创建的对象，Ctor 就等于 Object 的构造函数
    Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;

    return typeof Ctor === 'function' &&
            hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object); // hasOwn.toString 是调用 Function.prototype.toString 返回一个表示函数源代码的字符串
 }

 /**
  * 判断是否是空对象 {}
  * @param {*} obj 
  */
 function isEmptyObject(obj) {
    if(type(obj) !== 'object') {
        return false;
    }

    for(let name in obj) {
        return false;
    }

    return true;
 }

 /**
  * 判断是否为 window
  * @param {*} obj 
  */
 function isWindow(obj) {
    return !!obj && obj === obj.window; //window.window 指向 window 自身
 }

 /**
  * 判断是否为类数组
  * @param {*} obj 
  */
 function isArrayLike(obj) {
    const length = !!obj && 'length' in obj && obj.length;
    const typeRes = type(obj);

    //排除函数和 window 对象
    if(typeRes === 'function' || isWindow(obj)) {
        return false;
    }

    return typeRes === 'array' || //数组也返回true
            length === 0 ||       //允许 {length: 0}  
            typeof length === 'number' && length > 0 && (length - 1) in obj; //如果 length 大于0 那 obj[length - 1] 必须存在
 }

 module.exports = {
     type,
     isPlainObject,
     isEmptyObject,
     isWindow,
     isArrayLike
 }
