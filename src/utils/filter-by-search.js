export const getSearchProduct = (product, bySearch) => {
  if (bySearch) {
    return product.filter((item) => item.name.toLowerCase().includes(bySearch));
  }

  return product;
};
