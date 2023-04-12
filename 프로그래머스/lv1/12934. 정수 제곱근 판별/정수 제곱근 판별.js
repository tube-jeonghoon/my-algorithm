const solution = (n) => {
  let x = Math.sqrt(n);
  if (x % 1 !== 0) {
    return -1;
  }
  return (x + 1) ** 2;
};