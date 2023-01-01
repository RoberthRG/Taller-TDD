/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */
export const NUMBER_WORDS = Object.freeze({
    even: 'even',
    odd: 'odd',
  })

export const game = (startRange, endRange) => {
    var resultado = [];
    for (let numero = startRange; numero <= endRange; numero++) {
        if (isPrime(numero)){
            resultado.push(numero.toString());
        } else if (numero % 2 == 0) {
            resultado.push(NUMBER_WORDS.even);
        } else {
            resultado.push(NUMBER_WORDS.odd);
        }
    }
    return resultado
};

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};