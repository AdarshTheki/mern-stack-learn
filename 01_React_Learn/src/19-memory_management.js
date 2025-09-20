const array = [];
// %DebugPrint(array);

// continuous, Holey

// SMI (small integer)
// double (float, string function)
// packed element ('mixed')

const arrTwo = [1, 2, 3, 4, 5, 6];
// PACKED_SMI_ELEMENTS

arrTwo.push(7.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('8');
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLY_ELEMENTS

console.log('arrTwo: ', arrTwo);
console.log('arrTwo.length: ', arrTwo.length);
console.log('arrTwo[9]: ', arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in JS

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'; // HOLEY_ELEMENTS
arrFour[1] = '2'; // HOLEY_ELEMENTS
arrFour[2] = '3'; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push('1'); // PACKED_ELEMENTS
arrFive.push('2'); // PACKED_ELEMENTS
arrFive.push('3'); // PACKED_ELEMENTS
