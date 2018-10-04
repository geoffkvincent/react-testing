import {
  sum,
  capitalize,
} from '../utils'
import { italic } from 'ansi-colors';

it('sums two numbers', () => {
  const expected = 5;
  const actual = (2.3)
  expected(actual).toEqual(expected)
})

it('capitalizes a string', () => {
  const str = 'hello'
  const expected = 'Hello'
  const actual = capitalize(str)
  expect(actual).toEqual(expected)
})