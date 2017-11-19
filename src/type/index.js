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

function checkType() {
    const args = Array.prototype.slice.call(arguments, 0);

    args.forEach(item => {
        console.log(Type.type(item));
    })
}

checkType(number, string, boolean, und, nul, obj, array, error, reg, func);
