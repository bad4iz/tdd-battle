import sum from './sum';

describe('desc', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.assertions(1);
    expect(sum(1, 2)).assertions(3);
  });
});
