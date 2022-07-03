export const getCount = (value: number) => {
  let count: number | string = '0';
  if (value > 10000) {
    count = Math.round(value / 10000) + '万';
  } else {
    count = value;
  }
  return count;
};
