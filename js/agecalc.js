export class AgeCalc {
  constructor(age) {
  this.age = parseInt(age);
}

  yearsToSeconds() {
    const yearSeconds = 31536000;
    let ageSeconds = this.age * yearSeconds;
    return ageSeconds;
  }
}
//   isHaiku(input) {
//     if (this.syllableChecker(this.line1, 5) &&
//         this.syllableChecker(this.line2, 7) &&
//         this.syllableChecker(this.line3, 5)) {
//       return true;
//     }
//   }
//
//   vowelCounter(input) {
//     return (input.match(/[aeiouy]{1,2}/gi,'')).length;
//   }
//
//   eDestroyer(input){
//     let words = input.replace(/[^\w\s]|_/, "").split(" ");
//     words = words.map((word) => {
//       if (word.charAt(word.length - 1) === 'e' && word.length >= 3) {
//         return word.substr(0, word.length - 1);
//       } else {
//         return word;
//       }
//     });
//     return words.join(" ");
//   }
//
//   destroyAndCount(input) {
//     let result;
//
//     result = this.eDestroyer(input);
//     result = this.vowelCounter(result);
//
//     return result;
//   }
//
//   syllableChecker(input,  desiredCount) {
//     let result;
//
//     result = this.destroyAndCount(input);
//
//     if (result === desiredCount) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
