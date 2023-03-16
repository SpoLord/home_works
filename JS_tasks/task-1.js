/**
 * TASK-01
 *
 * Напишіть програму для перевірки на Українця.
 *
 * User-flow:
 * Користувачу послідовно задаються запитання, на які він має відповісти.
 * У користувча є право лише на одну помилку, якщо скоїв більше - тест не пройдений.
 * Якщо користувач хоча б десь вводить одне з слів - "Росія", "Россия", "Путін", "Путин" - запустити на його компьютері while(true).
 *
 * Запитання:
 *  - Продовжіть рядок "Батько наш - Бандера,..." // Україна - мати
 *  - На що збирав гроші Притула? // На байрактари
 *  - Як українсько-англійським суржиком привітатися з народом? // Добрий день everybody
 *  - Слава Україні! // Героям слава!
 *  - Слава нації! // Смерть ворогам!
 *  - Україна // понад усе!
 */

function runTest(questions, answers, forbiddenWords) {
  let mistake = 0
  if (questions.length !== answers.length) {
    return null
  }
  for (let i = 0; i < questions.length; i++) {
    const peopleAnswer = prompt(questions[i])
    if (forbiddenWords[peopleAnswer] === true) {
      alert("Test failed, йобаный москаль!")
      break
    }
    if (peopleAnswer !== answers[i]) {
      mistake++
      // повертає цикл на крок назад бо помилка відповіді
      i--
      if (mistake > 1) {
        alert("Test failed, йобаный москаль!")
        break
      }
    }
  }
}

const questionsUA = [
  "Батько наш - Бандера,",
  "На що збирав гроші Притула?",
  "Як українсько-англійським суржиком привітатися з народом?",
]
const answersUA = ["Україна - мати", "На байрактари", "Добрий день everybody"]
const forbiddenWordsUA = {
  Путін: true,
  Путин: true,
  Россия: true,
}

// приклад роботи перевірки на погані слова
// forbiddenWords["Путін"]

runTest(questionsUA, answersUA, forbiddenWordsUA)
