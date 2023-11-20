const divisibleByThreeOrFive = require('./divisibleThreeOrFive.js');

test('divisibleByThreeOrFive with input 10 should return 23', () => {
    expect(divisibleByThreeOrFive(10)).toBe(23);
  });
  
  test('divisibleByThreeOrFive with input 11 should return 33', () => {
    expect(divisibleByThreeOrFive(11)).toBe(33);
  });