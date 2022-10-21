var scanf = require("scanf");
console.log('Inserte la nota:')
let grade = scanf("%d");

if (grade <= 10 && grade >= 0) {
  switch (true) {
    case (grade >= 0 && grade <= 3):
      console.log("Muy deficiente");
      break;
    case (grade > 3 && grade <= 5):
      console.log("Insuficiente");
      break;
    case (grade > 5 && grade <= 6):
      console.log("Suficiente");
      break;
    case (grade > 6 && grade <= 7):
      console.log("Bien");
      break;
    case (grade > 7 && grade <= 9):
      console.log("Notable");
      break;
    case (grade > 9 && grade <= 10):
      console.log("Sobresaliente");
      break;
  }
} else console.log("Nota inválida");
