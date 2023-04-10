const solution = (seoul) => {
  let answer = "";
  let temp = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      temp = i;
    }
  }
  return `김서방은 ${temp}에 있다`;
};