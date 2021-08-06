"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRoman = void 0;
/**
 * toRoman - Convert an integer to Roman numerals
 * @param { number }value Integer to be converted to Roman numerals
 * @return { string } Roman numeral representation of the input value
*/
function toRoman(value) {
    let romanArray = [];
    // Check for valid numbers
    if (value >= 4000 || value <= 0) {
        return false;
    }
    // Get number digits with place value
    let thousand = Math.floor(value / 1000);
    let hundred = Math.floor((value % 1000) / 100);
    let ten = Math.floor((value % 100) / 10);
    let unit = value % 10;
    // Sort thousands
    for (let i = 0; i < thousand; i++) {
        romanArray.push('M');
    }
    // Sort hundreds
    if (hundred < 4) {
        for (let i = 0; i < hundred; i++) {
            romanArray.push('C');
        }
    }
    else if (hundred === 4) {
        romanArray.push('CD');
    }
    else if (hundred === 5) {
        romanArray.push('D');
    }
    else if (hundred > 5 && hundred < 9) {
        romanArray.push('D');
        for (let i = 0; i < hundred - 5; i++) {
            romanArray.push('C');
        }
    }
    else {
        romanArray.push('CM');
    }
    // Sort tens
    if (ten < 4) {
        for (let i = 0; i < ten; i++) {
            romanArray.push('X');
        }
    }
    else if (ten === 4) {
        romanArray.push('XL');
    }
    else if (ten === 5) {
        romanArray.push('L');
    }
    else if (ten > 5 && ten < 9) {
        romanArray.push('L');
        for (let i = 0; i < ten - 5; i++) {
            romanArray.push('X');
        }
    }
    else {
        romanArray.push('XC');
    }
    // Sort units
    if (unit < 4) {
        for (let i = 0; i < unit; i++) {
            romanArray.push('I');
        }
    }
    else if (unit === 4) {
        romanArray.push('IV');
    }
    else if (unit === 5) {
        romanArray.push('V');
    }
    else if (unit > 5 && unit < 9) {
        romanArray.push('V');
        for (let i = 0; i < unit - 5; i++) {
            romanArray.push('I');
        }
    }
    else {
        romanArray.push('IX');
    }
    return romanArray.join('');
}
exports.toRoman = toRoman;
