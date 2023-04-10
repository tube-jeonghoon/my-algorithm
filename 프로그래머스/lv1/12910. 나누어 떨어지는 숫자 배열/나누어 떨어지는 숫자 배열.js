let solution = (arr, divisor) => {
  const result = arr.filter((num) => num % divisor === 0);
//   if (result.length === 0) {
//     return [-1];
//   } else {
//     return result.sort((a, b) => a - b);
//   }
  // 삼항연사자 사용
  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
};
