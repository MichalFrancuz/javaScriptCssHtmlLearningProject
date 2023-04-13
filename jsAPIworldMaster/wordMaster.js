const ignoreOtherSymbols = document.querySelector(".word")
let counter = 1
let word = ''
let newWord = ''
let inputss = 'a'
let container = document.getElementsByClassName("firstWord")[0]
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter)
  }
  ignoreOtherSymbols.addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault()
  }
})
container.onkeydown = function(event) {
    let target = event.srcElement || event.target;
    let myLength = target.value.length;
    if (isLetter(event.key) && counter === 5) {
            target.value = target.value.slice(0, -1)
    }
    if (isLetter(event.key)) {
        word += target.value
    }
    if (event.key === 'Backspace') {
        word -= target.value.slice(0, -1)
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
    else {
        while (target = target.previousElementSibling) {
            if (target.tagName.toLowerCase() === "input") {
                if (event.key === 'Backspace') {
                    target.focus()
                    counter--
                    target.value = ''
                }
                break
            }
     }
    }
    console.log(counter)
    console.log(word)
}
function saveInputs() {
    newWord = ''
    for (let i = 0; i < 5; i++) {
      newWord += container[i].value
    }
    return newWord.trim()
}
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        inputss = saveInputs()
      console.log("Enter was pressed!");
    }
  });
  console.log(inputss)