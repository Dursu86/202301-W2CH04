export const arrayLength = (array) => {
  let i = 0;
  let length = 0;
  while (array[i] !== undefined) {
    if (array[i]) {
      i++;
      length++;
    }
  }

  return length;
};

export const arrayPush = (array, item) => {
  const x = arrayLength(array);
  array[x] = item;
  return arrayLength(array);
};
