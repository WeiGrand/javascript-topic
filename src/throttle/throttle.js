/*
 * @Author: heweiguang 
 * @Date: 2017-11-05 15:13:50 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-05 16:04:46
 */

 //实现步骤
 //1使用时间戳对比时间间隔 停止触发之后不再执行
 //2使用定时器 停止触发之后还会执行一次
 //3控制是否禁用第一次执行, 是否禁用停止触发的回调(options.leading, options.trailing)
 //options.leading 和 options.trailing 不能同时为 false
 //4可取消性
 
 /**
  * 
  * @param {*} fn 
  * @param {*} wait 
  * @param {*} options 
  */
 function throttle(fn, wait, options = {}) {
     let timeout, context, args, previous = 0;

     const later = function() {
         previous = options.leading === false ? 0 : Date.now();
         timeout = null;

         fn.apply(context, args);
     }

     const throttled = function() {
        const now = Date.now();


        if(!previous && options.leading === false) {
            previous = now;
        }
        
        const remaining = wait - (now - previous);

        context = this;
        args = arguments;

        if(remaining <= 0 || remaining > wait) {
            if(timeout) {
                clearTimeout(timeout);
                timeout = null;
            }

            previous = now;

            fn.apply(context, args);
        }else if(!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
     }

     throttled.cancel = function() {
         if(timeout) {
             clearTimeout(timeout);
             timeout = null;
             previous = 0;
         }
     }

     return throttled;
 }
