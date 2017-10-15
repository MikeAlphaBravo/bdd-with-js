import { AgeCalc } from './../js/agecalc.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();

    let inputBirthdate = $('#inputBirthdate').val();
    let solarAge = new AgeCalc();
    let solarAgeResult = solarAge.userAge(inputBirthdate);
    let earthAgeResult = solarAge.ageEarth(solarAgeResult);
    let mercuryAgeResult = solarAge.ageMercury(solarAgeResult);
    let venusAgeResult = solarAge.ageVenus(solarAgeResult);
    let marsAgeResult = solarAge.ageMars(solarAgeResult);
    let jupiterAgeResult = solarAge.ageJupiter(solarAgeResult);
    console.log(earthAgeResult, mercuryAgeResult, venusAgeResult, marsAgeResult, jupiterAgeResult);

    let result = dateAge.userAge();
    if (result === true) {
      $('#result').text("");
    }
    else {
      $('#result').text("");
    }
  });
});
