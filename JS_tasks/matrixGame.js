/**
 * drawChar(x,y,char) - метод - приймає в якості аргументів значення координат та символ що має бути "намальований" на цьому місці
 * drawRow(y, char) - метод - заміняє всі значення у вказаному рядку на передане.
 * drawColumn(x, char) - метод - заміняє всі значення у вказаному стовпчику на передане.
 * reset() - метод - повертає всі значення матриці за замовченням.
 * drawCharSet(x,y,charSet,direction)
 * - метод - те саме шо і drawChar charSet може бути довжиною більше 1-го символу.
 * починає малювати з вказаної позиції і продовжує допоки не скінчиться рядок або стовпчик або переданий charSet.
 * аргумент direction регулює по вертикалі чи горизонталі буде продовжуватись малювання.
 * якшо direction не переданий, то малювання відпувається по горизонталі.
 */

function matrix() {
  function createMatrix(size = 5, defaultValue = "R") {
    for (let i = 0; i < size; i++) {
      let row = []
      for (let i = 0; i < size; i++) {
        row.push(defaultValue)
      }
      value.push(row)
    }
  }

  function drawChar(x, y, char) {
    value[x][y] = char
  }

  function drawRow(x, char) {
    for (i in value) {
      value[x][i] = char
    }
  }

  function drawColumn(y, char) {
    for (i in value) {
      value[i][y] = char
    }
  }

  function reset() {
    value.splice(0, value.length)
    createMatrix()
  }

  function drawCharSet(x, y, char, direction = "x") {
    if (direction === "y") {
      for (let i = 0; i < char.length && i + x < value.length; i++) {
        value[i + x][y] = char[i]
      }
    } else {
      for (let i = 0; i < char.length && i + y < value.length; i++) {
        value[x][i + y] = char[i]
      }
    }
  }

  let value = []

  createMatrix()

  return {
    value,
    drawChar,
    drawRow,
    drawColumn,
    reset,
    drawCharSet,
  }
}

const myMatrix = matrix()

myMatrix.drawCharSet(2, 0, " хуй ")

console.log(myMatrix.value)
