export const getRatingProduct = (product, byRating) => {
  if (byRating) {
    return product.filter((item) => item.rating >= byRating);
  }

  return product;
};
