// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber() true on number (142)-333-5554', () => {
  expect(functions.isPhoneNumber('(142)-333-5554')).toBe(true);
})
test('isPhoneNumber() true on number 123-456-7890', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
})
test('isPhoneNumber() false on empty number string', () => {
  expect(functions.isPhoneNumber('')).toBe(false);
})
test('isPhoneNumber() false on number 911-33-1322', () => {
  expect(functions.isPhoneNumber('911-33-1322')).toBe(false);
})

test('isEmail() true on email powell@gmail.com', () => {
  expect(functions.isEmail('powell@gmail.com')).toBe(true);
})
test('isEmail() true on email TESTaMEEEE@hotmail.com', () => {
  expect(functions.isEmail('TESTaMEEEE@hotmail.com')).toBe(true);
})
test('isEmail() true on email @hi.com', () => {
  expect(functions.isEmail('@hi.com')).toBe(false);
})
test('isEmail() true on email powell@', () => {
  expect(functions.isEmail('powell@')).toBe(false);
})

test('isStrongPassword() true on password Ps33s3874va', () => {
  expect(functions.isStrongPassword('Ps33s3874va')).toBe(true);
})
test('isStrongPassword() true on password this_is_a_cool', () => {
  expect(functions.isStrongPassword('this_is_a_cool')).toBe(true);
})
test('isStrongPassword() false on password hi', () => {
  expect(functions.isStrongPassword('hi')).toBe(false);
})
test('isStrongPassword() false on password hiajf23foiwjf9w0efpm23j9kdsc', () => {
  expect(functions.isStrongPassword('hiajf23foiwjf9w0efpm23j9kdsc')).toBe(false);
})

test('isDate() true on date 11/11/1911', () => {
  expect(functions.isDate('11/11/1911')).toBe(true);
})
test('isDate() true on date 1/12/2003', () => {
  expect(functions.isDate('1/12/2003')).toBe(true);
})
test('isDate() false on date 1/12', () => {
  expect(functions.isDate('1/12')).toBe(false);
})
test('isDate() false on date 1/12/321', () => {
  expect(functions.isDate('1/12/321')).toBe(false);
})

test('isHexColor() true on color #ff2421', () => {
  expect(functions.isHexColor('#ff2421')).toBe(true);
})
test('isHexColor() true on color AAA', () => {
  expect(functions.isHexColor('AAA')).toBe(true);
})
test('isHexColor() false on color #ff242', () => {
  expect(functions.isHexColor('#ff242')).toBe(false);
})
test('isHexColor() false on color #ff24211', () => {
  expect(functions.isHexColor('#ff24211')).toBe(false);
})

