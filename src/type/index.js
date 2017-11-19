const Type = require('./type');

const number = 1,
      string = '123',
      boolean = true,
      und = undefined,
      nul = null,
      obj = {a: 1},
      array = [1, 2, 3],
      error = new Error(),
      reg = /a/g,
      func = function a(){};

function TestPlainObject(test) {
    this.test = test;
}

const testObject = Object.create(null);

function checkType() {
    const args = Array.prototype.slice.call(arguments, 0);

    args.forEach(item => {
        console.log(Type.type(item));
    })
}

//test type
console.log('test type');
checkType(number, string, boolean, und, nul, obj, array, error, reg, func);

//test isPlainObject
console.log('test isPlainObject');
console.log(Type.isPlainObject(new TestPlainObject('hello'))); //false
console.log(Type.isPlainObject({})); //true
console.log(Type.isPlainObject(testObject)); //true

//test isEmptyObject
console.log('test isEmptyObject');
console.log(Type.isEmptyObject({})); //true
console.log(Type.isEmptyObject(obj)); //false
console.log(Type.isEmptyObject([])); //false

//test isArrayLike
console.log('test isArrayLike');
console.log(Type.isArrayLike({
    0: 1,
    length: 1
})); //true

console.log(Type.isArrayLike({
    length: 0
})); //true

console.log(Type.isArrayLike({
    length: 1
})); //false

console.log(Type.isArrayLike({
    a: 1
})); //false
