const screen = document.querySelector(".js-target")
const newScreen = screen
const C = document.querySelector(".C")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const zero = document.querySelector(".zero")
const divide = document.querySelector(".divide")
const x = document.querySelector(".x")
const minus = document.querySelector(".minus")
const pluse = document.querySelector(".pluse")
const equal = document.querySelector(".equal")
C.addEventListener("click", function () {
    newScreen.innerText = ""
})
seven.addEventListener("click", function () {
    newScreen.innerText += "7"
})
eight.addEventListener("click", function () {
    newScreen.innerText += "8"
})
nine.addEventListener("click", function () {
    newScreen.innerText += "9"
})
four.addEventListener("click", function () {
    newScreen.innerText = 4
})
five.addEventListener("click", function () {
    newScreen.innerText = 5
})
six.addEventListener("click", function () {
    newScreen.innerText = 6
})
one.addEventListener("click", function () {
    newScreen.innerText = 1
})
two.addEventListener("click", function () {
    newScreen.innerText = 2
})
three.addEventListener("click", function () {
    newScreen.innerText = 3
})
zero.addEventListener("click", function () {
    newScreen.innerText = 0
})
divide.addEventListener("click", function () {
    newScreen.innerText = ""
})
x.addEventListener("click", function () {
    newScreen.innerText = ""
})
minus.addEventListener("click", function () {
    newScreen.innerText = ""
})
pluse.addEventListener("click", function () {
    newScreen.innerText = ""
})
equal.addEventListener("click", function () {
    newScreen.innerText = ""
})