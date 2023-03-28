import { describe, expect, test } from '@jest/globals';
import { isNumber, createClassList, isEmpty } from '../utils';

describe('Get classes', () => {
  test(`['input', 'input_search'] to equal 'input input_search'`, () => {
    expect(createClassList(['input', 'input_search'])).toBe('input input_search');
  });
});

describe('Check price', () => {
  test(`1200 to equal true`, () => {
    expect(isNumber('1200')).toBe(true);
  });

  test(`dff to equal false`, () => {
    expect(isNumber('dff')).toBe(false);
  });
});

describe('Check value', () => {
  test(`fdff to equal true`, () => {
    expect(isEmpty('Amsterdamse Veerkade')).toBe(true);
  });

  test(`'' to equal false`, () => {
    expect(isEmpty('')).toBe(false);
  });
});
