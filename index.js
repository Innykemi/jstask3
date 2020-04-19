function transformNumber(number) {
  if (Number.isInteger(number) == true) {
    let transformedList = [];
    for (let i = 1; i <= number; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        transformedList.push("yu-gi-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        transformedList.push("yu-gi");
      } else if (i % 2 == 0 && i % 5 == 0) {
        transformedList.push("yu-oh");
      } else if (i % 3 == 0 && i % 5 == 0) {
        transformedList.push("gi-oh");
      } else if (i % 2 == 0) {
        transformedList.push("yu");
      } else if (i % 3 == 0) {
        transformedList.push("gi");
      } else if (i % 5 == 0) {
        transformedList.push("oh");
      } else {
        transformedList.push(i)
      }
    }
    return transformedList;
  } else {
    console.log ("Inputed value is not a whole number");
  }
}

transformNumber(100);
transformNumber(55);