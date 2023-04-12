const solution = (x) => {
  let str_x = x.toString();
  let arr_x = Array.from(str_x);
  const new_array = arr_x.map((str) => Number(str));
  const sum = new_array.reduce((acc, cur) => acc + cur);
  if (x % sum === 0) {
    return true;
  }
  return false;
};