import { moment } from './../node_modules/moment/moment.js';

export class AgeCalc {
  constructor(age, date) {
  this.age = age;
  this.date = date;
}

  yearsToSeconds(age) {
    const yearSeconds = 31536000;
    let ageSeconds = age * yearSeconds;
    return ageSeconds;
  }

  userAge(date) {
    let presentDateSeconds = Math.floor(new Date() / 1000);
    let dateSeconds = Math.floor(new Date(date) / 1000);
    let ageInSeconds = presentDateSeconds - dateSeconds;
    let ageInYears = Math.floor(ageInSeconds / 31536000);
    return ageInYears;
  }

  ageEarth(age) {
    const earth = 1;
    let ageOnEarth = Math.round((age * earth) *100)/100;
    return ageOnEarth;
  }

  ageMercury(age) {
    const mercury = 0.24;
    let ageOnMercury = Math.round((age * mercury) *100)/100;
    return ageOnMercury;
  }

  // ageVenus(age) {
  //   const venus = 0.62;
  //   let ageOnVenus = Math.round((age * venus) *100)/100;
  //   return ageOnVenus;
  // }
  //
  // ageMars(age) {
  //   const mars = 1.88;
  //   let ageOnMars = Math.round((age * mars) *100)/100;
  //   return ageOnMars;
  // }
  //
  // ageJupiter(age) {
  //   const jupiter = 11.86;
  //   let ageOnJupiter = Math.round((age * jupiter) *100)/100;
  //   return ageOnJupiter;
  // }
  //
  // userStats(country, gender) {
  //   let lifeExpectancy = 0;
  //   if(gender === "male" && country === "United States") {
  //     lifeExpectancy = 80;
  //   } else if (gender === "female" && country === "United States") {
  //     lifeExpectancy = 84;
  //   } else if (gender === "male" && country === "Russia") {
  //     lifeExpectancy = 48;
  //   } else if (gender === "female" && country === "Russia") {
  //     lifeExpectancy = 54;
  //   } else if (gender === "male" && country === "France") {
  //     lifeExpectancy = 91;
  //   } else if (gender === "female" && country === "France") {
  //     lifeExpectancy = 93;
  //   } else {
  //     lifeExpectancy = 75;
  //   } return lifeExpectancy;
  // }
  //
  // checkLifeExpectancy(age, lifeExpectancy) {
  //   if(lifeExpectancy - age > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}
