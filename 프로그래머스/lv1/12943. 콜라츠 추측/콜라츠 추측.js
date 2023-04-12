const solution = (num) => {
  let i = 0;
  while (i <= 500) {
    if (num % 2 === 0) {
      if (num === 1) {
        console.log(i);
        return i;
      }
      num = num / 2;
      i++;
    } else {
      if (num === 1) {
        return i;
      }
      num = num * 3 + 1;
      i++;
    }
  }
  return -1;
};