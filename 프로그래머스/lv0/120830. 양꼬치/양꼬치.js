const solution = (n, k) => {
  // n 10 당 k 1개 공짜
  let total_price = 0;
  let yang_price = 12000;
  let um_price = 2000;
  let remove_um_count = 0;
  for (let i = 1; i <= n; i++) {
    total_price += yang_price;
    if (i % 10 === 0) {
      remove_um_count++;
    }
  }
  k = k - remove_um_count;
  console.log(remove_um_count, k);
  for (let i = 0; i < k; i++) {
    total_price += um_price;
  }
  return total_price;
};