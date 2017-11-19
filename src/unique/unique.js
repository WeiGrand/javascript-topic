/*
 * @Author: heweiguang 
 * @Date: 2017-11-06 23:23:32 
 * @Last Modified by: heweiguang
 * @Last Modified time: 2017-11-19 12:58:01
 */

 //实现方法

 //1双层循环
function unique(array) {
    const res = [];

    let i = j = 0, resLen = res.length;
    const arrayLen = array.length;

    for(; i < arrayLen; i++) {
        for(resLen = res.length; j < resLen; j++) {
            if(array[i] === res[j]) {
                break;
            }
        }

        if(j === resLen) {
            res.push(array[i]);
        }
    }

    console.log('unique');

    return res;
}

//2使用indexOf简化内层循环
function unique1(array) {
    const res = [];

    for(let i = 0, arrayLen = array.length; i < arrayLen; i++) {
        const current = array[i];

        if(res.indexOf(current) === -1) {
            res.push(current);
        }
    }

    console.log('unique1');

    return res;
}

//3排序后去重
function unique2(array) {
    const res = [];
    const sortedArray = array.concat().sort();

    let seen;

    for(let i = 0, arrayLen = sortedArray.length; i < arrayLen; i++) {
        

        if(!i || seen !== sortedArray[i]) {
            res.push(array[i]);
        }

        seen = sortedArray[i];
    }

    console.log('unique2');

    return res;
}

//4结合方法2，3 加入参数 isSorted 代表是否已排序， 未排序用方法2， 排序用方法3
function unique3(array, isSorted) {
    const res = [];
    let seen;

    for(let i = 0, arrayLen = array.length; i < arrayLen; i++) {
        const current = array[i]

        if(isSorted) {
            if(!i || seen !== current) {
                res.push(current);
            }

            seen = current;
        }else {
            if(res.indexOf(current) === -1) {
                res.push(current);
            }
        }
    }

    console.log('unique3');

    return res;
}

//5优化 加入 iterator
function unique4(array, isSorted, iterator) {
    const res = [];
    let seen = [];

    for(let i = 0, arrayLen = array.length; i < arrayLen; i++) {
        const current = array[i];
        const computed = iterator ? iterator(current, i, array) : current;

        if(isSorted) {
            if(!i || seen !== computed) {
                res.push(current);
            }

            seen = computed;
        }else if(iterator) {
            if(seen.indexOf(computed) === -1) {
                seen.push(computed);
                res.push(current);
            }
        }else {
            if(res.indexOf(computed) !== -1) {
                res.push(computed);
            }
        }
    }

    console.log('unique4');

    return res;
}

module.exports = {
    unique,
    unique1,
    unique2,
    unique3,
    unique4
};
