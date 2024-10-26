const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const clearButton = document.getElementById("clear")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            display.value = eval(display.value);
        } else {
            display.value += button.textContent;
        }
    });
    clearButton.addEventListener("click", () => {
        display.value="";
    });
});
