// Напишіть гру для відгадування слова.
// Game flow:
// + Спитати чи користувач хоче зіграти у гру?
// + Попросити користувача загадати слово.
// - Для кожного символу у загаданому слові, перевірити чи є такий символ у слові взагалі та чи співпадає здогадка користувача із символом на поточній позиції.
// - Якщо здогадка користувача _вірна_ - переходити до наступного символу
// - Якщо здогадка користувача _не вірна_ - повторювати запит символу допоки не набереться 5 помилкових здогадок, далі - вивести в консоль "You lose!". Якщо одна зі здогадок виявилася вірною - переходити на відгадування наступного символу.
// - Якщо користувач виграв - вивести у консоль "You win!"

// start game
function startOdinGame() {
  if (confirm(`Do you realy want to play Hangman?`)) {
    odinGame()
  }
}

// get, validate, return word
function getWord() {
  let value = prompt("wright the word whith 5 leters.")
  while (value.length !== 5) {
    alert("worl length must be 5 symbols")
    value = getWord()
  }
  return value
}

// get random word from array
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// get, validate, return char
function getChar() {
  char = prompt("What leter do you checking?")
  if (char.length !== 1) {
    alert("You have to wright just 1 letter")
    getChar()
  }
  return char
}

// return indexes of char or mistakes++
function checkChar(mistakes, includes, item, char) {
  debugger
  let idx = item.indexOf(char)
  while (idx != -1) {
    includes.push(idx)
    idx = item.indexOf(char, idx + 1)
  }
  if (includes.length < 1) {
    return mistakes + 1
  }
  return includes
}

//
function selectionChar(item, includes, char) {
  debugger
  for (let i in item) {
    if (item.i === char) {
      item.indexOf(i)
    } else {
      value = "false"
    }
  }
}

// get, combinate, return alert
function iterationResult(mistakes, guess) {
  alert(`You got ${mistakes} mistakes. \n Your word is ${guess}`)
}

// endgame functions
function winMess() {
  alert("You win!")
}
function loseMess() {
  alert("You lose.")
}

// game functions
function odinGame() {
  // описати алертом правила гри: маєш право на 5 помилок, вгадай слово з 5ти букв

  let item = ""
  let mistakes = 0
  let includes = []
  let guess = "_____"

  if (prompt("if you play solo, press 1, else press 2") === "1") {
    item = getRandomWord(items)
    console.log(item)
  } else {
    item = wordValidate()
  }
  debugger
  while (mistakes < 5) {
    includes = []
    while (checkChar(mistakes, includes, guess, "_").length > 0) {
      includes = []
      let char = getChar()
      checkChar(mistakes, includes, item, char)
      selectionChar(includes, mistakes, char)
      iterationResult(mistakes, guess)
    }
    winMess()
  }
  loseMess()
  //тут має початись цикл:
  //перевірити кількість помилок
  //while mistakes <5 – грай
  //else програв
  //перевірити букву
  //if букви нема – mistakes++
  //else {}
  //повернутись до початку циклу

  //спочатку треба навчитись закінчувати гру з повним угадуванням слова без врахування помилок (iteration?)
  //варто зробити функцію iteration
  //   while (mistakes < 5) {
  //     let leter = ""

  //     while (checkChar(item, leter)) {
  //       leter = getChar()
  //     }
  //     mistakes++
  //   }
  //   loseMess()
  //   odinGame()

  //   let leter = getChar()
  //   if (checkChar(item, leter)) {
  //     winMess()
  //     odinGame()
  //   } else {
  //     loseMess()
  //     odinGame()
  //   }
}

let items = ["чашка", "дошка", "пеніс", "папір", "карта", "гілка", "сосна"]

odinGame()
