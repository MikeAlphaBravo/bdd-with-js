import { AgeCalc } from './../js/agecalc.js';

describe('AgeCalc', function() {
  // let now = require('moment');
  let date;
  // let testingDate;
  // let dateTesting;
  // let currentTestingDate;
  let inputDate;
  beforeEach(function(){
  //   testingDate = "1982-27-07";
    date = new AgeCalc();
    inputDate = "1982-07-27";
  //   dateTesting = now(testingDate);
  //   currentTestingDate = now();
  });

  it('will convert years into seconds', function() {
    expect(date.yearsToSeconds(1)).toEqual(31536000);
  });

  it('will convert years into seconds', function() {
    expect(date.yearsToSeconds(5)).toEqual(157680000);
  });

  it('will return the age of the user in years', function() {
    expect(date.userAge("1982-07-27")).toEqual(35.24090091140284);
  });

  // it('will check for user age on Earth', function() {
  //   expect(date.ageEarth(inputDate)).toEqual(35)
  // });
  //
  // it('will check for user age on Mercury', function() {
  //   expect(date.ageEarth(inputDate)).toEqual(8.4)
  // });
  //
  // it('will check for user age on Venus', function() {
  //   expect(date.ageEarth(inputDate)).toEqual(21.7)
  // });
  //
  // it('will check for user age on Mars', function() {
  //   expect(date.ageEarth(inputDate)).toEqual(65.8)
  // });
  //
  // it('will check for user age on Jupiter', function() {
  //   expect(date.ageEarth(inputDate)).toEqual(415.1)
  // });

});
