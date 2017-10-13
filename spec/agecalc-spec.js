import { AgeCalc } from './../js/agecalc.js';

describe('AgeCalc', function() {
  it('will convert years into seconds', function() {
    let input = new AgeCalc(1);
    expect(input.yearsToSeconds()).toEqual(31536000);
  });

  it('will convert years into seconds', function() {
    let input = new AgeCalc(5);
    expect(input.yearsToSeconds()).toEqual(157680000);
  });
});
  // it('will scan an input and return the vowels count', function() {
  //   let vowel = new Poem("The red foxes", "Jump over the fence.", "Likes to eat apples!");
  //   expect(vowel.vowelCount()).toEqual([4, 6, 6])
  // });
  //
  // it('will remove slient e\'s at the end of any words in our string input', function() {
  //   let input = new Poem("The red foxes", "Jump over the fence.", "Likes to eat apples!");
  //   expect(input.eRemoval()).toEqual('The red foxesJump over the fencLikes to eat apples')
  // });
  //
  // it('will tell us if the input is a haiku', function() {
  //   let solution = new Poem("The redish foxes", "Jump high over the brown fence.", "Likes to eat apples!");
  //   expect(solution.isHaiku()).toEqual(true)
  // });
