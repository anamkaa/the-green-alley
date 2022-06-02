export const getStockProduct = (product, byStock) => {
  if (byStock) {
    return product.filter((item) => item.inStock);
  }

  return product;
};
