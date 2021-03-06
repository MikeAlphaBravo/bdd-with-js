import { AgeCalc } from './../js/agecalc.js';

describe('AgeCalc', function() {
  let dateAge;
  let inputDate;
  beforeEach(function(){
    dateAge = new AgeCalc();
    inputDate = "1982-07-27";
  });

  it('will convert years into seconds', function() {
    expect(dateAge.yearsToSeconds(1)).toEqual(31536000);
  });

  it('will convert years into seconds', function() {
    expect(dateAge.yearsToSeconds(5)).toEqual(157680000);
  });

  //intent is to get this passing and THEN round it so it's usable elsewhere.
  it('will return the age of the user in years', function() {
    console.log("hello");
    console.log(dateAge.userAge);
    expect(dateAge.userAge("1982-07-27")).toEqual(35);
  });


  it('will check for user age on Earth', function() {
    expect(dateAge.ageEarth(35)).toEqual(35)
  });

  it('will check for user age on Mercury', function() {
    expect(dateAge.ageMercury(35)).toEqual(8)
  });

  it('will check for user age on Venus', function() {
    expect(dateAge.ageVenus(35)).toEqual(21)
  });

  it('will check for user age on Mars', function() {
    expect(dateAge.ageMars(35)).toEqual(65)
  });

  it('will check for user age on Jupiter', function() {
    expect(dateAge.ageJupiter(35)).toEqual(415)
  });

  it('will calculate the difference between life expectancy and users age', function() {
    let ageOnEarth = dateAge.ageEarth(35);
    let country = "France";
    let gender = "female";
    let returnedLifeExpectancy = dateAge.userStats(country, gender);
    expect(returnedLifeExpectancy - ageOnEarth).toEqual(58);
  });

  it('will alert user of their age compared to their life expectancy', function() {
    let lifeExpectancy = 75
    let age = 100
    let diff = lifeExpectancy - age;
    expect(diff).toEqual(-25);
  });
});
