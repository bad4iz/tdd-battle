import sum from './sum';

describe('desc', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.assertions(1);
    expect(sum(1, 2)).toBe(3);
  });
  it('adds 2 + 2 to equal 4', () => {
    expect.assertions(1);
    expect(sum(2, 2)).toBe(4);
  });
});
