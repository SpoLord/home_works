// в гру треба додати словник, додавання слів, статистику букв в словнику і особисту статистики виграшів/програшів

function getWord() {
  let value = prompt("wright the word whith 5 leters.")
  while (value.length !== 5) {
    alert("worl length must be 5 symbols")
    value = getWord()
  }
  return value
}

function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getChar(guess, mistakes, wrongChars) {
  char = prompt(
    `Your word: ${guess.join(
      ""
    )} \n Mistakes counter: ${mistakes} \n Wrong letters: ${wrongChars} \n What letter are you checking?`
  )
  if (char.length !== 1) {
    alert("You have to wright just 1 letter")
    getChar(guess, mistakes, wrongChars)
  }
  return char
}

function gameProces(word) {
  let mistakes = 0
  let guess = ["_", "_", "_", "_", "_"]
  let wrongChars = []

  while (mistakes < 5 && guess.indexOf("_") >= 0) {
    let char = getChar(guess, mistakes, wrongChars)
    let counterEnteris = 0
    for (let i in word) {
      if (word[i] === char) {
        guess[i] = char
        counterEnteris++
      }
    }
    if (counterEnteris === 0) {
      mistakes++
      wrongChars.push(char)
    }
  }
  if (guess.join("") === word) {
    alert("You win!")
    odinGame()
  } else {
    alert(`You lose. The word was ${word}`)
    odinGame()
  }
}

function odinGame() {
  let items = ["чашка", "дошка", "пеніс", "папір", "карта", "гілка", "сосна"]
  let item
  // if (confirm("alone?")) {
  item = getRandomWord(items)
  //   console.log(item)
  // } else {
  //   item = getWord()
  // }
  gameProces(item)
}

odinGame()
