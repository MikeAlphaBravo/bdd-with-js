export class AgeCalc {
  constructor(age, inputDate) {
  this.age = age;
  this.inputDate = inputDate
}

  yearsToSeconds(age) {
    const yearSeconds = 31536000;
    let ageSeconds = age * yearSeconds;
    return ageSeconds;
  }
}
