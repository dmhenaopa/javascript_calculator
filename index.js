window.onload = () => {
    screen = document.getElementById('currentScreen');
}

let stringNumbers = '';

/* */
const showNumber = (number) => {
    screen.innerHTML = number;
    stringNumbers = stringNumbers + ' ' + number;
}

const addNumbers = (number1, number2) => {

} 