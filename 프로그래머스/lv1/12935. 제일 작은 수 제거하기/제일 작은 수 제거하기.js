const solution = (arr) => {
  if (arr.length <= 1) {
    return [-1];
  }
  const newArr = [...arr];
  // const min_number = Math.min(...newArr);
  // newArr.splice(newArr.indexOf(min_number, 1));
  // return newArr;
  newArr.splice(newArr.indexOf(Math.min(...newArr)), 1);

  return newArr;
};