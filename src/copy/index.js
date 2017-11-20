const Copy = require('./copy');

const a1 = ['old', 1, true, null, undefined];

const b1 = Copy.shallowCopy(a1);

a1[0] = 'new';

console.log(a1); //[ 'new', 1, true, null, undefined ]
console.log(b1); //[ 'old', 1, true, null, undefined ]

const a2 = [{old: 'old'}, ['old']];

const b2 = Copy.shallowCopy(a2);
const b3 = Copy.deepCopy(a2);
const b4 = JSON.parse(JSON.stringify(a2));

a2[0]['old'] = 'new';

console.log(a2); //[ { old: 'new' }, [ 'old' ] ]
console.log(b2); //[ { old: 'new' }, [ 'old' ] ]
console.log(b3); //[ { old: 'old' }, [ 'old' ] ]
console.log(b4); //[ { old: 'old' }, [ 'old' ] ]

const obj1 = {
    a: 1,
    b: { b1: 1, b2: 2 }
}

const obj2 = {
    b: { b1: 3, b3: 4 },
    c: 3
}

const obj3 = {
    d: 4
}

console.log(Copy.extend({}, obj1, obj2, obj3));
console.log(Copy.extend(true, {}, obj1, obj2, obj3));

const obj4 = {
    a: 1,
    b: {
        c: [5]
    }
}

const obj5 = {
    a: 1,
    b: {
        c: {
            0: 5
        }
    }
}

console.log(Copy.extend(true, obj4, obj5));

console.log(Copy.extend(true, [4, 5, 6, 7, 8, 9], [1, 2, 3])); //[ 1, 2, 3, 7, 8, 9 ]

const obj6 = {
    value: {
        3: 1
    }
}

const obj7 = {
    value: [5, 6, 7]
}

console.log(Copy.extend(true, {}, obj6, obj7)); //{ value: [ 5, 6, 7 ] }
console.log(Copy.extend(true, {}, obj7, obj6)); //{ value: { '3': 1 } }

