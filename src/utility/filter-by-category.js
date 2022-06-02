export const getCategoryProduct = (
  product,
  byPlantCategory,
  byPotCategory,
  byToolCategory
) => {
  const allCategory = [];
  if (
    byPlantCategory === false &&
    byPotCategory === false &&
    byToolCategory === false
  ) {
    return product;
  }
  if (byPlantCategory) {
    let newList = product.filter((item) => item.categoryName === "grownPlants");
    allCategory.push(...newList);
  }

  if (byPotCategory) {
    let newList = product.filter((item) => item.categoryName === "plantPots");
    allCategory.push(...newList);
  }

  if (byToolCategory) {
    let newList = product.filter((item) => item.categoryName === "gardenTools");
    allCategory.push(...newList);
  }
  return allCategory;
};
