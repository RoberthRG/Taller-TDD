import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('Should return an array with the length of the specified range', () => {
    //ARRANGE
    const startRange = 1;
    const endRange = 100;

    const lengthResult = 100;
    //ACT
    const resp = game(startRange, endRange);
    //ASSERT
    expect(resp.length).toEqual(lengthResult);
  });

  test('Should return "odd" if it is an odd number', () => {
    //ARRANGE
    const startRange = 20;
    const endRange = 25;

    const expectedResult = ['20', 'odd', '22', '23', '24', 'odd'];
    //ACT
    const resp = game(startRange, endRange);
    //ASSERT
    expect(resp[1]).toEqual(expectedResult[1]);
    expect(resp[5]).toEqual(expectedResult[5]);
  });

  test('Should return "even" if it is an even number', () => {
    //ARRANGE
    const startRange = 20;
    const endRange = 25;

    const expectedResult = ['even', 'odd', 'even', '23', 'even', 'odd'];
    //ACT
    const resp = game(startRange, endRange);
    //ASSERT
    expect(resp[0]).toEqual(expectedResult[0]);
    expect(resp[2]).toEqual(expectedResult[2]);
    expect(resp[4]).toEqual(expectedResult[4]);
  });

  test('Should return the number as string if it is prime', () => {
    //ARRANGE
    const startRange = 20;
    const endRange = 28;

    const expectedResult = ['even', 'odd', 'even', '23', 'even', 'odd', 'even', 'odd', 'even'];
    //ACT
    const resp = game(startRange, endRange);
    //ASSERT
    expect(resp).toEqual(expectedResult);

  });
});
