let solution = (a, b) => {
  const newArr = [];
  for (i = 0; i < a.length; i++) {
    newArr.push(a[i] * b[i]);
  }
  return newArr.reduce((acc, cur) => {
    return acc + cur;
  });
};
