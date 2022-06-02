export const getSortedProduct = (product, bySort) => {
  if (bySort === "FILTER_BY_LOWTOHIGH") {
    return [...product].sort(
      (item1, item2) => item1.discountPrice - item2.discountPrice
    );
  }
  if (bySort === "FILTER_BY_HIGHTOLOW") {
    return [...product].sort(
      (item1, item2) => item2.discountPrice - item1.discountPrice
    );
  }
  return product;
};
