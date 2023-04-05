function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter)
  }
document.querySelector("input").addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault()
  }
})
counter = 0
const container = document.getElementsByClassName("firstWord")[0]
container.onkeyup = function(e) {
    let target = e.srcElement || e.target;
    let myLength = target.value.length;
    if (target.nextElementSibling && myLength === 1) {
        let next = target
        while (next = next.nextElementSibling) {
            if (next.tagName.toLowerCase() === "input") {
                next.focus()
                counter++
                break;
            }
        }
    }
    else if (target.previousElementSibling && myLength === 0) {
        let previous = target
        while (previous = previous.previousElementSibling) {
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus()
                counter--
                break;
            }
        }
    }
    else if (!target.previousElementSibling && myLength === 1) {
        e.preventDefault()
    }
    console.log(counter)
}