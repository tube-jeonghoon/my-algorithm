let solution = (price, money, count) => {
  let shortage = 0;
  let total_price = 0;
  for (let i = 1; i <= count; i++) {
    total_price += price * i;
  }
  return total_price > money ? total_price - money : 0;
};