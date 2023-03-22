/**
 * drawChar(x,y,char) - метод - приймає в якості аргументів значення координат та символ що має бути "намальований" на цьому місці
 * drawRow(y, char) - метод - заміняє всі значення у вказаному рядку на передане.
 * drawColumn(x, char) - метод - заміняє всі значення у вказаному стовпчику на передане.
 * reset() - метод - повертає всі значення матриці за замовченням.
 * drawCharSet(x,y,charSet,direction) - метод - те саме шо і drawChar, але charSet може бути довжиною більше 1-го символу. починає малювати з вказаної позиції і продовжує допоки не скінчиться рядок або стовпчик або переданий charSet. аргемент direction регулює по вертикалі чи горизонталі буде продовжуватись малювання. якшо direction не переданий, то малювання відпувається по горизонталі.
 */
function createMatrix(size = 5, defaultValue = "R") {
  let value = new Array(size).fill(new Array(size).fill(defaultValue))

  function drawChar(x, y, char) {
    value[x][y] = char
    return value
  }

  function drawColumn(y, char) {
    value = value[y].splice(y, 1, char)
    return value
  }

  return {
    value,
    drawChar,
    //drawRow,
    drawColumn,
    //reset,
    //drawCharSet,
  }
}

const myMatrix = createMatrix()

myMatrix.drawChar(2, 2, "T")

console.log(myMatrix.value)

console.log(myMatrix.value[0][0])
