import { generateName, names } from './generate-name';

describe('generateName', () => {
  it('should generate a name within the array', () => {
    const name = generateName();
    expect(names.includes(name)).toBeTruthy();
  });
});
