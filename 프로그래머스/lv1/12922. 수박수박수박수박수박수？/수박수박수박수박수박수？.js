const solution = (n) => {
  let answer = 0;
  let subak = "수박".repeat(Math.ceil(n / 2));

  return subak.slice(0, n);
};
