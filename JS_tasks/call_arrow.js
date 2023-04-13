/**
 * функція підрахунку кількості її власних викликів.
 * @returns повертає числове значення кількості викликів
 */

// const counter = function () {
//   return {
//     incr: 0,
//     count: function () {
//       return ++this.incr
//     },
//   }
// }

// Для виклику треба створювати об'єкт і викликати його методом йього об'єкта
// const myCounter = counter()
// myCounter.count()

// ЦЕ ТЕ ЩО ТРЕБА
// const counter = function () {
//   let incr = 0

//   return function () {
//     return ++incr
//   }
// }

// Для виклику треба створювати об'єкт і просто звертатись до нього
// const myCounter = counter()
// myCounter()

const arr = [1, 2, 3, 4, 55, {}, "333"]

const myForEach = (srcArr, customLogic) => {
  for (let i = 0; i < srcArr.length; i++) {
    customLogic(srcArr[i], i)
  }
}

/**
 * це виклик функції myForEach з кастомним налаштуванням (його можна зробити менш кастомним)
 */
myForEach(arr, (elem) => {
  if (isNaN(elem)) {
    console.error("ACHTUNG!")
  }

  console.log(elem)
})
