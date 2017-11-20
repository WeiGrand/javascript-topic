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
