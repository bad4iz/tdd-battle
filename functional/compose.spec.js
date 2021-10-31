import compose from './compose';

describe('desc', () => {
  it('adds 2 + 2 to equal 4', () => {
    expect.assertions(1);
    const fn1 = (a) => a + 1;
    const fn2 = (a) => a * 2;

    const cm = compose(fn2, fn1);

    expect(cm(1)).toBe(4);
  });


  it('adds 2 + 2 to equal 4', () => {
    expect.assertions(1);
    const fn1 = (a) => a + 3;
    const fn2 = (a) => a * 2;

    const cm = compose(fn2, fn1);

    expect(cm(1)).toBe(8);
  });

  it('adds 2 + 2 to equal 4', () => {
    const fn1 = (a) => a + 1;
    const fn2 = (a) => a + 3;
    const fn3 = (a) => a + 1;
    const fn4 = (a) => a + 1;

    const cm = compose(fn3, fn2, fn1);
    cm;
    expect(cm(1)).toBe(6);
  });
});
