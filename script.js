// const screen = document.querySelector('.input-calc')
// const equal = document.querySelector('.btn-green')
// const reset = document.querySelector('.btn-red')

const input = document.getElementById('result')
const button = document.querySelectorAll('.btn')
let string = ""
button.forEach((button) => {
    button.addEventListener('click', (e) => {
        // debugger
        console.log(e.target.innerHTML)
        if (e.target.innerHTML == "=") {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML == "C") {
            string = "0"
            input.value = string
        } else if (e.target.innerHTML == "⌫") {
            string = string.slice(0, -1)
            input.value = string
        } else {
            string += e.target.innerHTML
            input.value = string
            console.log(string)
        }
    })
});
