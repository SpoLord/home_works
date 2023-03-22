function createMovie(title, schedule, ticketPrice) {
  const movie = {
    title: title,
    schedule: schedule,
    price: ticketPrice,

    /**
     *
     * @param {number} discount – biger then 0 and less then 1 for calculation new prices
     * @returns discounted price
     */
    makeSale: function (discount) {
      if (discount <= 0 || discount >= 1) {
        return null
      }
      this.price *= discount
    },
  }

  return movie
}

// ------------- simplifyed ------------- //

function createMovie(title, schedule, ticketPrice, seats = 32) {
  /**
   * @param {number} discount – biger then 0 and less then 1 for calculation new prices
   * @returns discounted price
   */
  function makeSale(discount) {
    if (discount <= 0 || discount >= 1) {
      return null
    }
    this.price *= discount
  }

  return {
    title,
    schedule,
    price: ticketPrice,
    makeSale,
    seats,
  }
}

// TASK-2

function cinema(name, adress, films, defoultFilmStock = []) {
  const summAllTickets = function () {
    let sum = 0

    for (let film of this.filmStock) {
      sum += film.seats * film.price
    }
  }
  const releaseFilm = function (filmRelease) {
    this.filmRelease = filmRelease
  }

  return {
    name,
    adress,
    filmStock: defoultFilmStock,
    filmRelease: null,
  }
}

// TASK-01
// Написати функцію without, котра повертає новий обь'єкт без вказаних значень.

// Arguments:
// object - будь-який обь'єкт
// propertyName - назва властивості для видалення
// Return value
// Jбʼєкт, у якого вказана властивість має значення null.

// Код для перевірки:
// const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
// console.log(without(data, 'address',)) // { login: 'gogi', password: 'GloryOfUkraine', address: null}

// TASK-02
// Написати функцію profileMagazine, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним.

// Arguments:
// label - назва магазину
// schedule - розклад роботи
// products - масив продуктів, наявних на складі
// Return value
// Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 2 методи - makeBlackFriday, verifySore

// метод makeBlackFriday
// Перебрати увесь масив товарів, для кожного товару вирахувати нову ціну, просто перемноживши стару ціну на розмір знижки.

// Arguments:
// discount - розмір знижки числом від 0 до 1
// Return value
// Відсутнє

// метод verifySore
// Метод має "пробігати" по усім товарам магазину, та для кожного звіряти його кількість з таким самим товаром на складі. Якщо кількість товару у магазині не збігається - переназначити її таку ж як на складі.

// Arguments:
// store - массив товарів на складі
// Return value
// Строка зі списком назв товарів кількість яких не зпівпала з наявністю у магазині.

// TASK-01
// Доповнити функціонал 2-ї задачі з минулої домашньої роботи. До функції profileMagazine, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

// Arguments:
// description - опис про магазин
// Return value
// Обʼєкт інтернет магазину, у якого наявні одноіменні аргументам властивості, а також 3 методи - makeBlackFriday, verifySore, ellipsisText, censorshipCheck

// метод ellipsisText
// Перевіряє максимальну довжину рядка, та за умови якщо рядок перевищує максимульну кількість символів - обрізає рядок та додає "..."

// Arguments:
// text - текст для перевірки
// maxLength - розмір максимальної довжини рядка в числовому значенні
// Return value
// Якщо максимальна кількість символів не перевищена - рядок без змін. Якщо максимальна кількість символів перевищена - рядок з "..." замість зайвих символів.

// метод censorshipCheck
// Перевіряє рядок(рекламу магазину) на цензуру, тобто якщо у тексті є заборонене слово то видаляє його по всьому рядку

// Arguments:
// advertisement - текст(рекламний текст) для перевірки
// forbiddenWord - заборонене слово
// Return value
// Якщо заборонене слово не знайдено - рядок без змін. Якщо заборонене слово присутнє в тексті - оновлений рядок без цього слова.

// TASK-02
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

// TASK-03
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
// Значення - true, в разі що магазин встигає до розпродажу, та значення - false, якщо ні
