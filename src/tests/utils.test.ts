import {describe, expect, test} from '@jest/globals';
import { createClassList } from '../utils';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(createClassList(['input', 'input_search'])).toBe('input input_search');
    });
});
