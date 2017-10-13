import { moment } from './../node_modules/moment/moment.js';

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

  userAge(date) {
    let presentDateSeconds = new Date() / 1000;
    let inputDateSeconds = new Date(date) / 1000;
    let ageInSeconds = presentDateSeconds - inputDateSeconds;
    let ageInYears = ageInSeconds / 31536000;
    console.log(ageInYears);
  }

  // ageEarth(age) {
  //   const earth = 1;
  //   let ageOnEarth = Math.round((age * earth) *100)/100;
  //   return ageOnEarth
  // }
  //
  // ageMercury(age) {
  //   const mercury = 0.24;
  //   let ageOnMercury = Math.round((age * mercury) *100)/100;
  //   return ageOnMercury
  // }
  //
  // ageVenus(age) {
  //   const venus = 0.62;
  //   let ageOnVenus = Math.round((age * venus) *100)/100;
  //   return ageOnVenus
  // }
  //
  // ageMars(age) {
  //   const mars = 1.88;
  //   let ageOnMars = Math.round((age * mars) *100)/100;
  //   return ageOnMars
  // }
  //
  // ageJupiter(age) {
  //   const jupiter = 11.86;
  //   let ageOnJupiter = Math.round((age * jupiter) *100)/100;
  //   return ageOnJupiter
  // }
}
