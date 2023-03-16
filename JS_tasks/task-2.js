/**
 * TASK-02
 *
 * Напишіть програму для підрахунку знищених цілей.
 *
 * User-flow:
 *  - програма має запитати користувача, чи хоче він увести кількість знищених цілей
 *  - якщо "так" - дати користувачу мождливість увести число
 *  - знову запитати чи хоче користуваач увести кількість знищених цілей
 *
 * І так по колу, поки користуваач не відмовиться від вводу.
 * Як тільки користуач відмовився - показали загальну сумму усіх цілей,
 * скільки користувач вводив до цього, якщо вона більша ніж 0.
 */

// while > confirm (count) > if true > prompt > count > save > while >>> if NO > count

let targetsCounter = 0

while (confirm(`You got ${targetsCounter} targets. Get more?`)) {
  let answer = parseInt(prompt("How many?"))

  while (!Number.isInteger(answer)) {
    answer = parseInt(prompt("You are wrong! Give me a number."))
  }

  targetsCounter += answer
}
alert(`You got ${targetsCounter} targets.`)

// don't see any ways to introduce functions here. This code is compact enough and i heve to make it easier before introduce any functions.
