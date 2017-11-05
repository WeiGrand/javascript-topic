let count = 1;
const container = document.querySelector('#container');

function getUserAction(e) {
    container.innerHTML = count++;
}

function throttleFn() {
    return throttle(getUserAction, 1000, {
        leading: false,
        trailing: true
    });
}

container.addEventListener('mousemove', throttleFn(), false);
