// function createMovie(title, schedule, ticketPrice) {
//   const movie = {
//     title: title,
//     schedule: schedule,
//     price: ticketPrice,

//     /**
//      *
//      * @param {number} discount – biger then 0 and less then 1 for calculation new prices
//      * @returns discounted price
//      */
//     makeSale: function (discount) {
//       if (discount <= 0 || discount >= 1) {
//         return null
//       }
//       this.price *= discount
//     },
//   }

//   return movie
// }
// ------------- simplifyed ------------- //

function createMovie(title, schedule, ticketPrice, seets = 32) {
  const moovie = {
    title: title,
    schedule: schedule,
    price: ticketPrice,
    seets,

    /**
     * @param {number} discount - number bigger then 0 and less then 1 for calculateing new prices
     */
    makeSale: function (discount) {
      if (discount <= 0 || discount >= 1) {
        console.error("Wrong argument type. Should be > 0 and < 1")
        return null
      }

      this.price = this.price * discount
    },
  }

  return moovie
}

function cinema(name, adress, defoultFilmStock = []) {
  const summAllTickets = function () {
    let sum = 0

    for (let film of this.filmStock) {
      sum += film.seats * film.price
    }

    return sum
  }

  const releaseFilm = function () {
    const today = new Date()

    if (today.getDay() === today.getDay()) {
      const randomIndex = Math.floor(Math.random() * this.filmStock.length - 1)
      this.filmRelease = this.filmStock[randomIndex]
    }
  }

  return {
    name,
    adress,
    filmStock: defoultFilmStock,
    filmRelease: null,

    summAllTickets,
    releaseFilm,
  }
}

const imaxFilmStore = [
  createMovie("Boogi man", "", 30, 100),
  createMovie("Vechoru blyz Dykanky", "", 50, 400),
  createMovie("avangers", "", 10, 1000),
  createMovie("green mile", "nonstop", 20, 200),
]

// const imax = cinema("IMAX", "in the middle of nowhere", imaxFilmStore)
// imax.releaseFilm()

// console.log(imax)

// const allCosts = imax.summAllTickets()
// console.log(allCosts)

/**
 * також додайте метод getID()
 * щоб сгенерувати ID потрібно скласти разом в одну строку:
 * - першу букву імені у нижньому регістрі
 * - останню букву імені у верхньому регістрі
 * - дату створення у мілісекундах поділену на кількість символів у расі та імені
 */

/**
 * @constructor Creature
 * @param {string} name
 * @param {string} race
 * @param {number} subscrition - from 0 to 3. Describes the level of access to the information.
 * @param {date} dateCreated
 */
function Creature(name, race, subscrition, dateCreated) {
  this.name = name
  this.race = race
  this.subscrition = subscrition
  this.dateCreated = dateCreated

  this.getID = function () {
    const firstChar = this.name[0].toLowerCase()
    const lastChar = this.name[-1].toUpperCase()
    const millisrconds = this.dateCreated.getTime()

    this.ID =
      firstChar +
      lastChar +
      millisrconds / (this.name.length + this.race.length)

    return this.ID
  }
}

/**
 * TASK-01
 *
 * Написати свою невеличку реалізацію чату за допомогою функцій, обʼєктів та простого використання масивів.
 *
 * Обʼєкт чату повинен мати:
 * - двох адресатів, що представлені типовими обʼєктами користувачів
 * - історію повідомлень, що представлені типовими обʼєктами повідомлень
 * - можливість додати в історію нове повідомлення.
 * - можливість очистити історію.
 *
 * Обʼєкт користувача повинен мати:
 * - нікнейм
 * - метод для створення чату з іншим користувачем
 * - метод для відправки повідомлення
 *
 * Обʼєкт повідомлення повинен мати:
 * - текст
 * - відправник
 * - отримувач
 */

function message(text, from, to) {
  this.text = text
  this.from = from
  this.to = to
}

function createUser(nickname) {
  this.nickname = nickname
  this.myChats = []
  this.startChatting = function (toUser) {
    const newChat = createChat(this, toUser)
    this.myChats.push(this.newChat)
    console.log(`Chat with ${toUser.nickname} get started`)
  }
  this.sendMessage = function (msgText, to) {
    for (let chat in this.myChats) {
      if (chat.from === this && chat.to === to) {
        const newMessage = createMessage(msgText, from, to)

        chat.addMessage.push(newMessage)
      }
    }
    console.log(`Message ${msg.from.nickname} to ${msg.to.nickname} sended`)
  }
}

function Chat(from, to) {
  this.from = from
  this.to = to
  this.history = []
  this.addMessage = function (msg) {
    this.history.push(msg)
  }
  this.removeHistory = function () {
    this.history = []
  }
}

// TASK-02
// Написати функцію without, котра повертає новий об'єкт без вказаних значень.

// Arguments:
// object - будь-який об'єкт
// propertyName - назва властивості для видалення
// Return value
// Обʼєкт, у якого вказана властивість має значення null.

function without(object, propertyName) {
  object[propertyName] = null

  return object
}

const data = { login: "gogi", password: "GloryOfUkraine", address: "Kiev" }
console.log(without(data, "address")) // { login: 'gogi', password: 'GloryOfUkraine', address: null}
