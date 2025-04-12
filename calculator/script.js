const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = "";
buttons.forEach(button => {
    const value = button.getAttribute('data-value');
    if (value !== null) {
        button.addEventListener('click', () => {
            if (display.textContent === "0" || display.textContent === "Error") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        });
    }
});

document.getElementById('equals').addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
});

document.getElementById('clear').addEventListener('click', () => {
    display.textContent = "0";
});

document.getElementById('delete').addEventListener('click', () => {
    if (display.textContent.length === 1 || display.textContent === "Error") {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
});
























 









