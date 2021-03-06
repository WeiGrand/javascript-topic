/*
 * @Author: heweiguang 
 * @Date: 2017-11-05 15:11:39 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-05 15:42:18
 */
//实现步骤
//1绑定this
//2传递参数 eg: event对象
//3是否立即执行
//4返回值 当immediate 为 true时才应该有返回值
//5可取消性
/**
 * 
 * @param {*} fn 
 * @param {*} wait 
 * @param {*} immediate 
 */
function debounce(fn, wait, immediate) {
    let timeout, result;

    const debounce = function() {
        var context = this;
        var args = arguments;

        if(timeout) clearTimeout(timeout);

        if(immediate) {
            let callNow = !timeout;

            timeout = setTimeout(() => {
                timeout = null;
            }, wait);

            if(callNow) result = fn.apply(context, args);
        }else {
            timeout = setTimeout(() => {
                fn.apply(context, args);
            }, wait);
        }

        return result;
    }

    debounce.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    }

    return debounce;
}
