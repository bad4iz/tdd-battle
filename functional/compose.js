export default (...fns) =>
  (a) => {
    fns; //?
    return fns.reduceRight((acc, curr) => {
      acc; //?
      curr;
      return acc(curr(a));
    });
  };
