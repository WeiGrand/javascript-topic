let count = 1;
const container = document.querySelector('#container');
const cancel = document.querySelector('#cancel');

function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this);
    console.log(e);
}

function debounceFn() {
    //return getUserAction;
    return debounce(getUserAction, 1000, true);
}

const setUserAction = debounceFn();

container.addEventListener('mousemove', setUserAction, false);
cancel.addEventListener('click', function() {
    setUserAction.cancel();
    return false;
}, false);
