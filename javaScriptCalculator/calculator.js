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
const arrow = document.querySelector('.arrow')
let equals = ''
let numberFirst = ''
let numberSecond = ''
C.addEventListener("click", function () {
    newScreen.innerText = '0'
})
arrow.addEventListener('click', function () {
    newScreen.innerText = '0'
})



seven.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '7'
    } else {
        newScreen.innerText += '7'
    }
})
eight.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '8'
    } else {
        newScreen.innerText += '8'
    }
})
nine.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '9'
    } else {
        newScreen.innerText += '9'
    }
})
four.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '4'
    } else {
        newScreen.innerText += '4'
    }
})
five.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '5'
    } else {
        newScreen.innerText += '5'
    }
})
six.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '6'
    } else {
        newScreen.innerText += '6'
    }
})
one.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '1'
    } else {
        newScreen.innerText += '1'
    }
})
two.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '2'
    } else {
        newScreen.innerText += '2'
    }
})
three.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '3'
    } else {
        newScreen.innerText += '3'
    }
})
zero.addEventListener("click", function () {
    if (newScreen.innerText === '0') {
        newScreen.innerText = '0'
    } else {
        newScreen.innerText += '0'
    }
})



divide.addEventListener("click", function () {
    numberFirst = newScreen.innerText + ' '
    newScreen.innerText = '0'

    console.log(numberFirst)
})
x.addEventListener("click", function () {
    numberFirst = newScreen.innerText
    newScreen.innerText = '0'

    console.log(numberFirst)
})
minus.addEventListener("click", function () {
    numberFirst = newScreen.innerText + ' ' + ' ' + ' '
    newScreen.innerText = '0'

    console.log(numberFirst)
})
pluse.addEventListener("click", function () {
    numberFirst = newScreen.innerText + '   '
    newScreen.innerText = '0'

    console.log(numberFirst)
})



equal.addEventListener("click", function () {
    if (numberFirst === newScreen.innerText + ' ') {
        numberSecond = newScreen.innerText
        newScreen.innerText = numberFirst / numberSecond
        console.log(numberSecond)
    }
    if (numberFirst === newScreen.innerText * numberSecond) {
        numberSecond = newScreen.innerText
        newScreen.innerText = numberFirst * numberSecond
        console.log(numberSecond)
    }
    if (numberFirst === newScreen.innerText + ' ' + ' ' + ' ') {
        numberSecond = newScreen.innerText
        newScreen.innerText = numberFirst - numberSecond
        console.log(numberSecond)
    }

    console.log(newScreen.innerText)
})