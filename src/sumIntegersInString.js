/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

export const sumOfIntegersInString = (input) => {
    var sum = 0;
    var temporal = ""
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (!isNaN(element) && element != " ") {
            temporal += element
            if (isNaN(input[i + 1])) {
                sum += parseInt(temporal)
                temporal = ""
            }
        }
    }
    return sum;
};
