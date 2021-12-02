import { random } from './random';

describe('random', () => {
  it('should generate a random number between 6 and 10', () => {
    const result = random(6, 10);
    const expected = result >= 6 && result <= 10;
    expect(expected).toBeTruthy();
  });
});
