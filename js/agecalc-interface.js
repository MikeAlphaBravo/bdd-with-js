import { AgeCalc } from './../js/agecalc.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let inputBirthdate = $('#inputBirthdate').val();
    let solarAge = new Poem(inputBirthdate);
    let result = date.userAge();
    if (result === true) {
      $('#result').text("");
    }
    else {
      $('#result').text("");
    }
  });
});
