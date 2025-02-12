import { expect, test } from 'vitest';
import { sum, Child } from '../../src/index.ts';

test('sum 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);


    new Child('1', '2');
});

