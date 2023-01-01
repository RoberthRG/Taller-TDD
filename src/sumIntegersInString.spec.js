import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('Should return "0" is the string no contain numbers', () => {
    //ARRANGE
    const inputString = 'helloWord';

    const expectedResult = 0;
    //ACT
    const result = sumOfIntegersInString(inputString);
    //ASSERT
    expect(result).toEqual(expectedResult);
  });

  test('Should return "0" if string contains 0 numbers', () => {
    //ARRANGE
    const inputString = '0hello0Word0';

    const expectedResult = 0;
    //ACT
    const result = sumOfIntegersInString(inputString);
    //ASSERT
    expect(result).toEqual(expectedResult);
  });

  test('Should return the same number if only exist a number', () => {
    //ARRANGE
    const inputString = 'hello5Word';

    const expectedResult = 5;
    //ACT
    const result = sumOfIntegersInString(inputString);
    //ASSERT
    expect(result).toEqual(expectedResult);
  });

  test('Should return the sum of the all numbers in a string without spaces', () => {
    //ARRANGE
    const inputString = 'h3ll0w0rld1';

    const expectedResult = 4;
    //ACT
    const result = sumOfIntegersInString(inputString);
    //ASSERT
    expect(result).toEqual(expectedResult);
  });

  test('Should return the sum of the all numbers with 2 digit or more', () => {
    //ARRANGE
    const inputString = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy';

    const expectedResult = 3635;
    //ACT
    const result = sumOfIntegersInString(inputString);
    //ASSERT
    expect(result).toEqual(expectedResult);
  });

  test('Should return the sum of the all numbers in a string with spaces', () => {
    //ARRANGE
    const inputString = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';

    const expectedResult = 3635;
    //ACT
    const result = sumOfIntegersInString(inputString);
    //ASSERT
    expect(result).toEqual(expectedResult);
  });
});
