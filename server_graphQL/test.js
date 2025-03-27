import _ from 'lodash';

const userInput = 'Hello,.@ world!';
const escapedInput = _.escapeRegExp(userInput);
const regex = new RegExp(escapedInput, 'i');

console.log(escapedInput);
