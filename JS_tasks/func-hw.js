// TASK-01

// Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.
// Arguments:
// - _word_ - слово, на якому треба буде перевіряти наявність букви
// - _index_ - позиція символу на якому треба перевірити здогадку
// - _char_ - буква, наявність якої треба перевіряти в слові
// Return value
// true або false, залежно від того є буква в слові чи ні.

function indexMatch() {
  const word = prompt("Give me a word")
  const index = parseInt(prompt("Give me an expected index"))
  const char = prompt("Give me a char")

  let value = ""

  word.indexOf(char)
  if (word.indexOf(char) === index) {
    value = "true"
  } else {
    value = "false"
  }

  alert(value)
}

//  TASK-02 done

// Напишіть функцію, яка перевірятиме довжину свого аргументу.
//  Arguments:
// - str - строка, довжину якої має перевіряти функція
// - expectedLength - очікувана довжина строки
// Return value
// true або false

function isLenghtOK() {
  const str = prompt("Give me a string")
  const expectedLength = parseInt(prompt("Give me an expected length"))

  let value = ""

  if (expectedLength === str.length) {
    value = "true"
  } else {
    value = "false"
  }

  alert(value)
}

/**
 * Задание 3.
 *
 * Функцию, которая определяет количество переданных аргументов и возвращает их количество.
 */

function lenghtCounter() {
  let strs = []
  //мені не подобається, як працює цей вайл, але я їбав придумувати нормальне рішення.
  while (confirm("Do you want to add an arg?")) {
    strs.push(prompt("add an arg"))
  }
  let value = strs.length
  console.log(strs)
  console.log(value)
}

/**
 * Задание 4.
 *
 * Написать функцию-счётчик count.
 *
 * Функцию обладает будет двумя параметрами:
 * - Первый — число, с которого необходимо начать счёт;
 * - Второй — число, которым необходимо закончить счёт.
 *
 * Если число, с которого начинается счёт больше, чем число,
 * которым он заканчивается, вывести сообщение:
 * «⛔️ Ошибка! Счёт невозможен.»
 *
 * Если оба этих числа одинаковые, вывести сообщение:
 * «⛔️ Ошибка! Нечего считать.»
 *
 * В начале счёта необходимо вывести сообщение:
 * «🏁 Отсчёт начат.».
 *
 * Каждый «шаг» счёта необходимо выводить в консоль.
 * После прохождения последнего «шага» необходимо вывести сообщение:
 * «✅ Отсчёт завершен.».
 *
 */

/**
 * Задание 5.
 *
 * Написать улучшенную функцию-счётчик countAdvanced.
 *
 * Функцию-счётчик из предыдущего задания расширить дополнительным функционалом:
 * - Добавить ей третий параметр, и выводить в консоль только числа, кратные значению из этого
 *  параметра;
 * - Генерировать ошибку (throw new Error), если функция была вызвана не с тремя аргументами;
 * - Генерировать ошибку, если любой из аргументов не является допустимым числом.
 */

/**
 * Задание 6.
 *
 * Написать функцию-сумматор всех своих параметров.
 *
 * Функция принимает произвольное количество параметров.
 * Однако каждый из них обязательно должен быть числом.
 *
 * Генерировать ошибку, если:
 * - Хоть один из параметров не является допустимым числом (в ошибке указать порядковый номер аргумента);
 * - Если функция была вызвана менее, чем с двумя аргументами.
 *
 * Условия:
 * - Оператором «...» пользоваться запрещено.
 */

/**
 * Задание 7.
 *
 * Написать функцию-счётчик increment.
 *
 * Первый вызов функции должен вернуть 0.
 * Каждый новый вызов функции должен возвращать число, на 1 больше, чем предыдущее.
 *
 * Продвинутая сложность:
 * - На техническом языке подробно объяснить механизм решения.
 */

/**
 * Задание 8.
 *
 * Написать функцию createIncrement, которая будет возвращать другую функцию.
 *
 * Первый вызов этой другой функции должен вернуть 0.
 * Каждый новый вызов этой другой функции должен возвращать число, на 1 больше, чем предыдущее.
 *
 * Каждый новый вызов родительской функции createIncrement будет возвращать новую «дочернюю» функцию-счётчик.
 * Каждая новая дочерняя функция должна начинать отсчёт с 0.
 *
 * Условия:
 * - Использовать замыкания;
 * - Объявлять переменные на глобальном уровне модуля запрещено.
 *
 * Продвинутая сложность:
 * - На техническом языке подробно объяснить механизм решения.
 */

while (confirm("Do you want to do something?")) {
  switch (prompt("1 for index; 2 for length; 3 for Hangman")) {
    case "1":
      indexMatch()
      break
    case "2":
      isLenghtOK()
      break
    case "3":
      lenghtCounter()
      break
    case "4":
      break
    case "5":
      break
    case "6":
      break
    case "7":
      break
    case "8":
      break
  }
}