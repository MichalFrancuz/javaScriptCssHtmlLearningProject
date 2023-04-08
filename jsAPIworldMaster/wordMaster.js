counter = 0
const ignoreOtherSymbols = document.querySelector(".word")
function isLetter(letter) {
    counter++
    return /^[a-zA-Z]$/.test(letter)
  }
  ignoreOtherSymbols.addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault()
  }
})
const container = document.getElementsByClassName("firstWord")[0]
container.onkeyup = function(event) {
    let target = event.srcElement || event.target;
    let myLength = target.value.length;
    if (myLength === 1) {
        let next = target
        while (next = next.nextElementSibling) {
            if (isLetter(event.key)) {
                if (next.tagName.toLowerCase() === "input") {
                    if (isLetter(event.key)) {
                        next.focus()
                    }
                    break
                }
            }
        }
    }
    else if (myLength === 0) {
        let previous = target
        while (previous = previous.previousElementSibling) {
            if (previous.tagName.toLowerCase() === "input") {
                if (isLetter(event.key)) {
                    previous.focus()
                    counter--
                } else if (event.key === 'Backspace') {
                    previous.value = ''
                    previous.focus()
                    counter--
                }
            }
     }
    }
    console.log(counter)
}