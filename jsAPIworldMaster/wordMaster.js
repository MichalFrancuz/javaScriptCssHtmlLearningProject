const ignoreOtherSymbols = document.querySelector(".word")
let counter = 1
let word = ''
let fifthValue = ''
let inputss = 'a'
let row = 0
let container = document.getElementsByClassName("word")[row]
let container2 = document.getElementsByClassName("word")[row]
const inputs = document.getElementsByClassName('input')
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter)
  }
  ignoreOtherSymbols.addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault()
  }
})
container.onkeyup = function(event) {
    let target = event.srcElement || event.target
    let myLength = target.value.length
    if (isLetter(event.key) && counter < 5) {
        word += target.value
    }
    if (event.key === 'Enter' && counter == 5) {
        fifthValue = target.value
        const wordArray = word.split('')
        wordArray[4] = fifthValue
        let newWord = wordArray.join('')
        console.log(row)
        console.log(newWord)
        if (document.getElementsByClassName("word")[row]) {
            counter = 1
            word = ''
            fifthValue = ''
            row++
            container = document.getElementsByClassName('word')[row]
            container2 = document.getElementsByClassName('word')[row]
            if (container) {
                inputs[0].focus() //here is problem with index - this index don't exist 
            }
        }
        const apiUrl = 'https://words.dev-apis.com/word-of-the-day?puzzle=1337'
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        if (data.word === newWord) {
            console.log('You win')
        } 
        else {
            console.log('You lose')
        }
        })
        .catch(error => {
            console.error(error)
        })
        }
    if (event.key === 'Backspace') {
        target.value = ''
    }
    if (myLength === 1) {
        while (target = target.nextElementSibling) {
            if (target.tagName.toLowerCase() === "input") {
                if (isLetter(event.key)) {
                    target.focus()
                    counter++
                }
                break
            }
        }
    }
    console.log(counter)
    console.log(word)
}
container2.onkeydown = function(event) {
    let target = event.srcElement || event.target
    let myLength = target.value.length
    if (isLetter(event.key) && counter === 5) {
        target.value = target.value.slice(0, -1)
    }
    if (myLength === 0) {
        while (target = target.previousElementSibling) {
            if (target.tagName.toLowerCase() === "input") {
                if (event.key === 'Backspace') {
                    target.focus()
                    counter--
                    target.value = ''
                    word = word.slice(0, -1)
                }
                break
            }
     }
    }
}