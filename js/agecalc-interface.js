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

    let inputGender = $('#gender').val();
    let inputCountry = $('#country').val();
    let demographics = solarAge.userStats(inputCountry, inputGender);

    let checkInputtedLifeExpectancy = solarAge.checkLifeExpectancy(solarAgeResult, demographics);

    $(".results").show();
    $("#showResultsEarth").text(earthAgeResult);
    $("#showResultsMercury").text(mercuryAgeResult);
    $("#showResultsVenus").text(venusAgeResult);
    $("#showResultsMars").text(marsAgeResult);
    $("#showResultsJupiter").text(jupiterAgeResult);
  });
});
