export const getPricedProduct = (product, byRange) => {
  if (byRange) {
    return product.filter((item) => item.discountPrice <= byRange);
  }

  return product;
};
