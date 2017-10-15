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

  // it('will check for user age on Venus', function() {
  //   expect(dateAge.ageEarth(inputDate)).toEqual(21.7)
  // });
  //
  // it('will check for user age on Mars', function() {
  //   expect(dateAge.ageEarth(inputDate)).toEqual(65.8)
  // });
  //
  // it('will check for user age on Jupiter', function() {
  //   expect(dateAge.ageEarth(inputDate)).toEqual(415.1)
  // });
  //
  // it('will calculate the difference between life expectancy and users age', function() {
  //   let ageOnEarth = dateAge.ageEarth(inputDate);
  //   let country = "France";
  //   let gender = "female";
  //   let lifeExpectancy = dateAge.userStats(country, gender);
  //   expect(lifeExpectancy - ageOnEarth).toEqual(58);
  // });

});
