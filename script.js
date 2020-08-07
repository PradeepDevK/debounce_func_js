const debounce = (fn, delay) => {
    let timeOutId;
    return function (...args) {
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const printMessage = () => {
    document.getElementById("message").textContent = "You have clicked a button";
    console.log("You have clicked a button");
};

const sayHello = debounce(printMessage, 2000);
