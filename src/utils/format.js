

export const numFormat = (num, places) => {
  const zeros = places - num.toString(16).length + 1;
  return '0x' + Array(+(zeros > 0 && zeros)).join('0') + num.toString(16);
}
