const fillPaginationArray = (
  count: number,
  current: number,
  siblingCount: number
) => {
  let end = current + siblingCount;
  let start = current - siblingCount;
  const length = end - start + 1;

  if (Math.sign(start) === -1) {
    end += start * -1;
    start = 1;
  }

  if (end > count) {
    const goingOverTheLimit = end - count;
    start -= goingOverTheLimit;
    end = count;
  }

  return Array.from({ length }, (_, idx) => idx + start);
};

export default fillPaginationArray;
