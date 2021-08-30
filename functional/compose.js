export default (...fns) =>
  fns.reduce((acc, curr) => (...args) => acc(curr(...args)));
