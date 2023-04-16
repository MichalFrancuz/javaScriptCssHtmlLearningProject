const ignoreOtherSymbols = document.querySelector(".word")
let counter = 1
let word = ''
let fifthValue = ''
let inputss = 'a'
let container = document.getElementsByClassName("firstWord")[0]
let container2 = document.getElementsByClassName("firstWord")[0]
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter)
  }
  ignoreOtherSymbols.addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault()
  }
})
container2.onkeyup = function(event) {
    let target = event.srcElement || event.target
    let myLength = target.value.length
    if (isLetter(event.key)) {
        word += target.value
    }
    // if (isLetter(event.key) && counter === 5) {
    //     target.value = target.value.slice(0, -1)
    // }
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
}
container.onkeydown = function(event) {
    let target = event.srcElement || event.target;
    // let myLength = target.value.length;
    if (isLetter(event.key) && counter === 5) {
        target.value = target.value.slice(0, -1)
    }
    // if (isLetter(event.key)) {
    //     word += target.value
    // }
    if (event.key === 'Enter' && counter == 5) {
        fifthValue = target.value
        var wordArray = word.split('')
        wordArray[4] = fifthValue
        let newWord = wordArray.join('')
        const apiUrl = 'https://words.dev-apis.com/word-of-the-day?puzzle=1337';
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        if (data.word === newWord) {
            console.log('You win')
        } else {
            console.log('You lose')
        }
        })
        .catch(error => {
            console.error(error);
        });
        console.log(newWord)
        }
    if (event.key === 'Backspace') {
        target.value = ''
        word = word.slice(0, -1)
    }
    // if (myLength === 1) {
    //     while (target = target.nextElementSibling) {
    //         if (target.tagName.toLowerCase() === "input") {
    //             if (isLetter(event.key)) {
    //                 target.focus()
    //                 counter++
    //             }
    //             break
    //         }
    //     }
    // }
    // else {
    //     while (target = target.previousElementSibling) {
    //         if (target.tagName.toLowerCase() === "input") {
    //             if (event.key === 'Backspace') {
    //                 target.focus()
    //                 counter--
    //                 target.value = ''
    //             }
    //             break
    //         }
    //  }
    // }
    console.log(counter)
    console.log(word)
}