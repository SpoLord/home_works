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
