const Unique = require('./unique');

//unique

const array = [1, 1, '1', '1'];

console.log(Unique.unique(array));

//unique1

const array1 = [1, 1, '1'];

console.log(Unique.unique1(array1));

//unique2

const array2 = [1, 1, '1'];

console.log(Unique.unique2(array2));

//unique3

const array3 = [1, 1, '1', 2, 2];

console.log(Unique.unique3(array3, true));

//unique4

const array4 = [1, 1, 'a', 'A', 2, 2];

console.log(Unique.unique4(array4, true, (item) => {
    return typeof item === 'string' ? item.toLowerCase() : item;
}));
