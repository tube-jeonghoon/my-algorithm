const solution = (n) => {
  let count;
  let newArr = [];
  for (count = 0; count <= n; count++) {
    if (count % 2 === 1) {
      newArr.push(count);
    }
  }
  return newArr;
};