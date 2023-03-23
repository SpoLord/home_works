// TASK-01

// Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.
// Arguments:
// - _word_ - слово, на якому треба буде перевіряти наявність букви
// - _index_ - позиція символу на якому треба перевірити здогадку
// - _char_ - буква, наявність якої треба перевіряти в слові
// Return value
// true або false, залежно від того є буква в слові чи ні.

function indexMatch(word, index, char) {
  return word.indexOf(char) === index
}

//  TASK-02 done

// Напишіть функцію, яка перевірятиме довжину свого аргументу.
//  Arguments:
// - str - строка, довжину якої має перевіряти функція
// - expectedLength - очікувана довжина строки
// Return value
// true або false

function isLenghtOK(str, expectedLength) {
  return expectedLength === str.length
}

/**
 * Задание 3.
 *
 * Функцию, которая определяет количество переданных аргументов и возвращает их количество.
 */

// це, щоб ти розумів піздець того, шо відбувалось.
// //------------------------------------------------
// function lenghtCounter(strs = []) {
//   while (confirm("Do you want to add an arg?")) {
//     strs.push(prompt("add an arg"))
//   }
//   let value = strs.length
//   console.log(strs)
//   console.log(value)
// }

function lenghtCounter() {
  return arguments.length
}

/**
 * Задание 4.
 *
 * Написать функцию-счётчик count.
 *
 * Функция обладает двумя параметрами:
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

// ввод двух чисел: стартове, кінцеве > перевірка валідності чисел через if більше/менше > якщо все ок, виводити числа через while ++
function countChar(startChar, finishChar) {
  if (startChar > finishChar) {
    console.error("⛔️ Ошибка! Счёт невозможен.")
  } else if (startChar === finishChar) {
    console.error("Нечего считать.")
  } else {
    console.log("🏁 Отсчёт начат.")
    while (startChar <= finishChar) {
      console.log(startChar)
      startChar++
    }
    console.log("✅ Отсчёт завершен.")
  }
}

/**
 * Задание 5.
 *
 * Написать улучшенную функцию-счётчик countAdvanced.
 *
 * Функцию-счётчик из предыдущего задания расширить дополнительным функционалом:
 * + Добавить ей третий параметр, и выводить в консоль только числа, кратные значению из этого
 *  параметра;
 * + Генерировать ошибку (throw new Error), если функция была вызвана не с тремя аргументами;
 * + Генерировать ошибку, если любой из аргументов не является допустимым числом.
 */

function updCountChar(startChar, finishChar, divider) {
  if (arguments.length < 3) {
    console.error("Не вистачає аргументів")
  } else if (
    // Хотів зробити перевірку окремою функцією + for(){}, але не знайшов спосіб перебрати аргументи функції
    !Number.isInteger(startChar) ||
    !Number.isInteger(finishChar) ||
    !Number.isInteger(divider)
  ) {
    console.error("⛔️ Помилка! Вказані невірна аргументи")
  } else if (startChar > finishChar) {
    console.error("⛔️ Помилка! Рахунок неможливий.")
  } else if (startChar === finishChar) {
    console.error("Нічого рахувати.")
  } else {
    console.log("🏁 Почато рахунок.")
    while (startChar <= finishChar) {
      if (startChar % divider === 0) {
        console.log(startChar)
        startChar++
      } else {
        startChar++
      }
    }
    console.log("✅ Рахунок закінчено.")
  }
}

/**
 * Задание 6.
 *
 * Написать функцию-сумматор всех своих параметров.
 *
 * Функция принимает произвольное количество параметров.
 * Однако каждый из них обязательно должен быть числом.
 *
 * Генерировать ошибку, если:
 * + Хоть один из параметров не является допустимым числом (в ошибке указать порядковый номер аргумента);
 * - Если функция была вызвана менее, чем с двумя аргументами.
 *
 * Условия:
 * - Оператором «...» пользоваться запрещено.
 */
function sumOfParameters() {
  if (arguments.length < 2) {
    console.error("Введено лише один аргумент. Треба >=2")
    return null
  } else {
    let value = 0
    for (let i in arguments) {
      if (!Number.isInteger(arguments[i])) {
        console.log(`Аргумент ${arguments[i]} за індексом ${i} не ціле число`)
        value = 0
        break
      } else {
        value += arguments[i]
      }
    }
    if (value === 0) {
    } else {
      console.log(value)
      return value
    }
  }
}

/**
 * -- Задание 7.
 *
 * Написать функцию-счётчик increment.
 *
 * + Первый вызов функции должен вернуть 0.
 * + Каждый новый вызов функции должен возвращать число, на 1 больше, чем предыдущее.
 *
 * Продвинутая сложность:
 * - На техническом языке подробно объяснить механизм решения.
 */

// Вкрадено, але незрозуміло: https://learn.javascript.ru/function-object
// function makeIncrement() {
//   function increment() {
//     return increment.count++
//   }
//   increment.count = 0
//   return increment
// }
// let increment = makeIncrement()

function counter() {
  let count = 0
  return function () {
    return ++count
  }
}

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

// while (confirm("Do you want to do something?")) {
//   switch (prompt("1 for index; 2 for length; 3 for Hangman")) {
//     case "1":
//       indexMatch()
//       break
//     case "2":
//       isLenghtOK()
//       break
//     case "3":
//       lenghtCounter()
//       break
//     case "4":
//       break
//     case "5":
//       break
//     case "6":
//       break
//     case "7":
//       break
//     case "8":
//       break
//   }
// }
