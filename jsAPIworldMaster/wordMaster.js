function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter)
  }
const ignoreOtherSymbols = document.querySelector(".letter")
  ignoreOtherSymbols.addEventListener("keydown", function (event) {
  if (!isLetter(event.key)) {
    event.preventDefault()
  }
})
let row = 0
addKeyUpEventListner(row)
function addKeyUpEventListner(row) {
  let counter = 0
  let word = ''
  let fifthValue = ''
  let inputs = document.getElementsByClassName('first')[row]
  let container = document.getElementsByClassName("word")[row]
  let container2 = document.getElementsByClassName("word")[row]
  const loader = document.querySelector("#loading")
  container.onkeyup = function(event) {
    let target = event.srcElement || event.target
    let myLength = target.value.length
      if (isLetter(event.key) && counter < 4) {
          word += target.value
      }
      if (event.key === 'Enter' && counter == 4) {
          row++
          fifthValue = target.value
          const wordArray = word.split('')
          wordArray[4] = fifthValue
          let newWord = wordArray.join('')
          const apiUrl = 'https://words.dev-apis.com/word-of-the-day?puzzle=1334'
          fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            document.getElementById('loading').classList.add('active')
          console.log(data)
          if (data.word === newWord) {
              console.log('You win')
              alert('Congratulations, you win')
              for (let i = 0; i < 5; i++) {
                if (row === 1) {
                const inputElementGreen = document.getElementsByClassName('green')[i]
                inputElementGreen.blur()
                inputElementGreen.style.backgroundColor = 'green'
                inputElementGreen.style.color = 'white'
                }
                if (row === 2) {
                const inputElementGreen = document.getElementsByClassName('green2')[i]
                inputElementGreen.blur()
                inputElementGreen.style.backgroundColor = 'green'
                inputElementGreen.style.color = 'white'
                }
                if (row === 3) {
                const inputElementGreen = document.getElementsByClassName('green3')[i]
                inputElementGreen.blur()
                inputElementGreen.style.backgroundColor = 'green'
                inputElementGreen.style.color = 'white'
                }
                if (row === 4) {
                const inputElementGreen = document.getElementsByClassName('green4')[i]
                inputElementGreen.blur()
                inputElementGreen.style.backgroundColor = 'green'
                inputElementGreen.style.color = 'white'
                }
                if (row === 5) {
                const inputElementGreen = document.getElementsByClassName('green5')[i]
                inputElementGreen.blur()
                inputElementGreen.style.backgroundColor = 'green'
                inputElementGreen.style.color = 'white'
                }
                if (row === 6) {
                const inputElementGreen = document.getElementsByClassName('green6')[i]
                inputElementGreen.blur()
                inputElementGreen.style.backgroundColor = 'green'
                inputElementGreen.style.color = 'white'
                }
          }
        }
          else {
              console.log('Post word: ', newWord)
                const newWordLetter = newWord.split('')
                const dataWordLetter = data.word.split('')
                for (let i = 0; i < 5; i++) {
                    if (row === 1) {
                        const inputElementGray = document.getElementsByClassName('gray')[i]
                        inputElementGray.style.backgroundColor = 'gray'
                        inputElementGray.style.color = 'white'
                        if (newWordLetter[i] === dataWordLetter[i]) {
                            const inputElementGreen = document.getElementsByClassName('green')[i]
                            inputElementGreen.style.backgroundColor = 'green'
                            dataWordLetter[i] = ''
                            console.log(dataWordLetter)
                        }
                        else if (i === 4) {
                            for (let j = 0; j < 5; j++) {
                                for (let k = 0; k < 5; k++) {
                                    if (newWordLetter[j] === dataWordLetter[k] && document.getElementsByClassName('green')[j].style.backgroundColor !== 'green') {
                                        console.log(dataWordLetter)
                                        const inputElementYellow = document.getElementsByClassName('yellow')[j]
                                        inputElementYellow.style.backgroundColor = 'yellow'
                                        dataWordLetter[k] = ''
                                        k = 0
                                        j++
                                        console.log(dataWordLetter)
                                    }
                                }
                            }
                        }
                    }
                    if (row === 2) {
                        const inputElementGray = document.getElementsByClassName('gray2')[i]
                        inputElementGray.style.backgroundColor = 'gray'
                        inputElementGray.style.color = 'white'
                        if (newWordLetter[i] === dataWordLetter[i]) {
                            const inputElementGreen = document.getElementsByClassName('green2')[i]
                            inputElementGreen.style.backgroundColor = 'green'
                            dataWordLetter[i] = ''
                            console.log(dataWordLetter)
                        }
                        else if (i === 4) {
                            for (let j = 0; j < 5; j++) {
                                for (let k = 0; k < 5; k++) {
                                    if (newWordLetter[j] === dataWordLetter[k] && document.getElementsByClassName('green2')[j].style.backgroundColor !== 'green') {
                                        const inputElementYellow = document.getElementsByClassName('yellow2')[j]
                                        inputElementYellow.style.backgroundColor = 'yellow'
                                        dataWordLetter[k] = ''
                                        k = 0
                                        j++
                                        console.log(dataWordLetter)
                                    }
                                }
                            }
                        }
                    }
                    if (row === 3) {
                        const inputElementGray = document.getElementsByClassName('gray3')[i]
                        inputElementGray.style.backgroundColor = 'gray'
                        inputElementGray.style.color = 'white'
                        if (newWordLetter[i] === dataWordLetter[i]) {
                            const inputElementGreen = document.getElementsByClassName('green3')[i]
                            inputElementGreen.style.backgroundColor = 'green'
                            dataWordLetter[i] = ''
                            console.log(dataWordLetter)
                        }
                        else if (i === 4) {
                            for (let j = 0; j < 5; j++) {
                                for (let k = 0; k < 5; k++) {
                                    if (newWordLetter[j] === dataWordLetter[k] && document.getElementsByClassName('green3')[j].style.backgroundColor !== 'green') {
                                        const inputElementYellow = document.getElementsByClassName('yellow3')[j]
                                        inputElementYellow.style.backgroundColor = 'yellow'
                                        dataWordLetter[k] = ''
                                        k = 0
                                        j++
                                        console.log(dataWordLetter)
                                    }
                                }
                            }
                        }
                    }
                    if (row === 4) {
                        const inputElementGray = document.getElementsByClassName('gray4')[i]
                        inputElementGray.style.backgroundColor = 'gray'
                        inputElementGray.style.color = 'white'
                        if (newWordLetter[i] === dataWordLetter[i]) {
                            const inputElementGreen = document.getElementsByClassName('green4')[i]
                            inputElementGreen.style.backgroundColor = 'green'
                            dataWordLetter[i] = ''
                            console.log(dataWordLetter)
                        }
                        else if (i === 4) {
                            for (let j = 0; j < 5; j++) {
                                for (let k = 0; k < 5; k++) {
                                    if (newWordLetter[j] === dataWordLetter[k] && document.getElementsByClassName('green4')[j].style.backgroundColor !== 'green') {
                                        const inputElementYellow = document.getElementsByClassName('yellow4')[j]
                                        inputElementYellow.style.backgroundColor = 'yellow'
                                        dataWordLetter[k] = ''
                                        k = 0
                                        j++
                                        console.log(dataWordLetter)
                                    }
                                }
                            }
                        }
                    }
                    if (row === 5) {
                        const inputElementGray = document.getElementsByClassName('gray5')[i]
                        inputElementGray.style.backgroundColor = 'gray'
                        inputElementGray.style.color = 'white'
                        if (newWordLetter[i] === dataWordLetter[i]) {
                            const inputElementGreen = document.getElementsByClassName('green5')[i]
                            inputElementGreen.style.backgroundColor = 'green'
                            dataWordLetter[i] = ''
                            console.log(dataWordLetter)
                        }
                        else if (i === 4) {
                            for (let j = 0; j < 5; j++) {
                                for (let k = 0; k < 5; k++) {
                                    if (newWordLetter[j] === dataWordLetter[k] && document.getElementsByClassName('green5')[j].style.backgroundColor !== 'green') {
                                        const inputElementYellow = document.getElementsByClassName('yellow5')[j]
                                        inputElementYellow.style.backgroundColor = 'yellow'
                                        dataWordLetter[k] = ''
                                        k = 0
                                        j++
                                        console.log(dataWordLetter)
                                    }
                                }
                            }
                        }
                    }
                    if (row === 6) {
                        const inputElementGray = document.getElementsByClassName('gray6')[i]
                        inputElementGray.blur()
                        inputElementGray.style.backgroundColor = 'gray'
                        inputElementGray.style.color = 'white'
                        if (newWordLetter[i] === dataWordLetter[i]) {
                            const inputElementGreen = document.getElementsByClassName('green6')[i]
                            inputElementGreen.style.backgroundColor = 'green'
                            dataWordLetter[i] = ''
                            console.log(dataWordLetter)
                        }
                        else if (i === 4) {
                            alert('You lose, correct word is ' + data.word)
                            for (let j = 0; j < 5; j++) {
                                for (let k = 0; k < 5; k++) {
                                    if (newWordLetter[j] === dataWordLetter[k] && document.getElementsByClassName('green6')[j].style.backgroundColor !== 'green') {
                                        const inputElementYellow = document.getElementsByClassName('yellow6')[j]
                                        inputElementYellow.style.backgroundColor = 'yellow'
                                        dataWordLetter[k] = ''
                                        if (j < 5) {
                                            k = 0
                                            j++
                                        }
                                        console.log(dataWordLetter)
                                    }
                                }
                            }
                        }
                    }
                }
                  counter = 0
                  word = ''
                  fifthValue = ''
                  inputs.focus()
          }
          addKeyUpEventListner(row)
          })
          .catch(error => {
              console.error(error)
              document.getElementById('loading').classList.remove('active')
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
      console.log('row: ', row, 'input: ', counter, 'word: ', word)
  }
  container2.onkeydown = function(event) {
    let target = event.srcElement || event.target
    let myLength = target.value.length
    if (isLetter(event.key) && counter === 4) {
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
}