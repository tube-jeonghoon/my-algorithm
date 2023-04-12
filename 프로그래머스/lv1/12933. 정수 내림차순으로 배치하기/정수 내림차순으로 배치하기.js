const solution = (n) => {
  let arr = n.toString().split("").map(String);
  let sort_arr = arr.sort((a, b) => b - a);
  let answer = sort_arr.reduce((acc, cur) => acc + cur);
  return parseInt(answer);
};