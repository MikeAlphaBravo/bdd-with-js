import { AgeCalc } from './../js/agecalc.js';

describe('AgeCalc', function() {
  // let now = require('now');
  let date;
  // let testingDate;
  // let dateTesting;
  // let currentTestingDate;
  // let inputDate;
  beforeEach(function(){
  //   testingDate = "1982-27-07";
    date = new AgeCalc();
  //   inputDate = date.currentAge("1982/07/27");
  //   dateTesting = now(testingDate);
  //   currentTestingDate = now();
  });

  it('will convert years into seconds', function() {
    expect(date.yearsToSeconds(1)).toEqual(31536000);
  });

  it('will convert years into seconds', function() {
    expect(date.yearsToSeconds(5)).toEqual(157680000);
  });
});

//
// it('will convert years into seconds', function() {
//   expect(date.yearsToSeconds(1)).toEqual(31536000);
// });
//
// it('will convert years into seconds', function() {
//   expect(date.yearsToSeconds(5)).toEqual(157680000);
// });
