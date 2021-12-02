import { isNonNullish, isNullish } from './nullish-check';

describe('NonNullish filtering utility', () => {
  it('should return false for null', () => {
    expect(isNonNullish(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isNonNullish(undefined)).toBe(false);
  });

  it('should return true for 0', () => {
    expect(isNonNullish(0)).toBe(true);
  });

  it('should return true for false', () => {
    expect(isNonNullish(false)).toBe(true);
  });
});

describe('Nullish filtering utility', () => {
  it('should return true for null', () => {
    expect(isNullish(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isNullish(undefined)).toBe(true);
  });

  it('should return false for zero', () => {
    expect(isNullish(0)).toBe(false);
  });

  it('should return false for false', () => {
    expect(isNullish(false)).toBe(false);
  });

  it('should return false for empty object', () => {
    expect(isNullish({})).toBe(false);
  });
});
