/**
 * Створює продукт
 * @param {string} name - назва продукту
 * @param {number} price - ціна продукту
 * @param {number} amount - кількість продукту в магазині. Замовчування = 0
 * @returns об'єкт продукт з трьома параметрами
 */
function createProduct(name, price, amount) {
  return {
    name,
    price,
    amount,
  }
}

/**
 * Перебрає масив товарів. Для кожного товару вирахувує нову ціну, перемноживши стару ціну на знижку.
 * @param {number} discount - розмір знижки числом від 0 до 1
 * @returns
 */
const makeBlackFriday = function (discount) {
  if (discount <= 0 || discount >= 1) {
    console.error("Wrong argument type. Should be > 0 and < 1")
    return null
  }

  for (i of shopStore) {
    i.price = i.price * discount
  }
  return shopStore
}

/**
 * Перевіряє кількість товарів в магазині і на складі.
 * Якщо кількість товару у магазині не збігається - переназначає на складську.
 *
 * @param {*} store - массив товарів на складі. Product(name, price, amount)
 * @param {*} shopeStore – массив товарів в магазині. Product(name, price, amount)
 *
 * @returns
 * Строка зі списком назв товарів кількість яких не cпівпала з наявною у магазині.
 */
const verifyStore = function (store, shopStore) {
  const notMatchStore = []
  for (j of store) {
    for (i of shopStore) {
      if (j.name === i.name) {
        i.amount = j.amount
        notMatchStore.push(j.name)
      }
    }
  }
  return notMatchStore.join(", ")
}

/**
 * Перевіряє максимальну довжину рядка, та за умови якщо рядок перевищує максимульну кількість символів - обрізає рядок та додає "..."
 *
 * @param {string} text - текст для перевірки
 * @param {number} maxLength - розмір максимальної довжини рядка в числовому значенні
 *
 * @returns
 * Якщо максимальна кількість символів не перевищена - рядок без змін.
 * Якщо максимальна кількість символів перевищена - рядок з "..." замість зайвих символів.
 */
// є сенс виконувати пізніше, коли з'явиться вивід тексту на екран
const ellipsisText = function (text, maxLength) {}

/**
 * Перевіряє рядок(рекламу магазину) на цензуру, тобто якщо у тексті є заборонене слово то видаляє його по всьому рядку
 *
 * @param {string} advertisement - текст(рекламний текст) для перевірки
 * @param {string} forbiddenWord - заборонене слово
 *
 * @returns
 * Якщо заборонене слово не знайдено - рядок без змін.
 * Якщо заборонене слово присутнє в тексті - оновлений рядок без цього слова.
 */
const censorshipCheck = function (advertisement, forbiddenWord) {}

/**
 * Створює обʼєкт інтернет-магазину
 * @param {string} label - назва магазину
 * @param {string} schedule - розклад роботи
 * @param {Array} shopStore - масив продуктів, наявних на складі
 * @param {string} description - опис магазину
 
 * @method makeBlackFriday - вирахувує нову ціну з врахуванням знижки для кожного товару
 * @method verifySore - співставляє кількість товарів в магазині і на складі
 * @method ellipsisText - перевіряє довжину назви товару
 * @method censorshipCheck - перевіряє строку на цензуру
 */
const createShop = function (label, schedule, shopStore, description) {
  return {
    label,
    schedule,
    shopStore,
    description,

    makeBlackFriday,
    verifyStore,
    //ellipsisText,
    //censorshipCheck
  }
}

// TASK-05
// Доповнити функціонал з минулої задачі. До функції profileMagazie, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

// Arguments:
// startSaleDate - дата початку знижок
// Return value
// Обʼєкт інтернет магазину, у якого наявні одноіменні аргументам властивості, а також 4 методи - makeBlackFriday, verifySore, ellisisText, checkDaytoSale

// метод checkDaytoSale
// Вираховує скільки днів залишилось до початку розпродажу

// Arguments:
// startSaleDate - дата початку розпродажу у форматі(22.07.2022)
// Return value
// Кількість днів яка залишилась до початку розпродажу

// TASK-06
// Доповнити функціонал з минулої задачі. До функції profileMagazie, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

// Arguments:
// team - кількість працівників в магазині
// Return value
// Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 5 методи - makeBlackFriday, verifySore, ellisisText, checkDaytoSale, prepareInventory

// метод prepareInventory
// Вираховує чи встигає команда магазину підготувати товар до розпродажу за умови, що 1 працівник в день може підготовляти лише 10 одиниць товару.

// Arguments:
// немає

// Return value
// Значення - true, в разі що магазин встигає до розпродажу, інакше - false

// перевірка коду
const shopStore = [
  createProduct("butter", 15, 5),
  createProduct("chiken", 30, 5),
  createProduct("ketchup", 25, 5),
  createProduct("table", 50, 5),
]

const store = [
  createProduct("butter", 15, 2),
  createProduct("chiken", 30, 2),
  createProduct("ketchup", 25, 58),
]

const shop = createShop(
  "Shop",
  "24/7",
  shopStore,
  "Це ніфіга собі вау магазин! Купують всі!"
)
console.log(shop.shopStore)
console.log(shop.shopStore[2].price)
console.log(shop.makeBlackFriday(0.8))
console.log(shop.verifyStore(store, shopStore))

const date = new Date("2023", "7", "20")
const date2 = new Date()
const MILISEC_PERDAY = 86400000

console.log(date)
console.log(date2)
console.log(Math.ceil((date.getTime() - date2.getTime()) / MILISEC_PERDAY))
