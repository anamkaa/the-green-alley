export const filterReducerFunction = (filterstate, filteraction) => {
  switch (filteraction.type) {
    case "FILTER_BY_HIGHTOLOW":
      return { ...filterstate, bySort: filteraction.type };

    case "FILTER_BY_LOWTOHIGH":
      return { ...filterstate, bySort: filteraction.type };

    case "FILTER_BY_PRICE":
      return { ...filterstate, byRange: filteraction.payload };

    case "FILTER_BY_PLANTCATEGORY":
      return { ...filterstate, byPlantCategory: !filterstate.byPlantCategory };

    case "FILTER_BY_POTCATEGORY":
      return { ...filterstate, byPotCategory: !filterstate.byPotCategory };

    case "FILTER_BY_TOOLCATEGORY":
      return { ...filterstate, byToolCategory: !filterstate.byToolCategory };

    case "FILTER_BY_SEARCH":
      return { ...filterstate, bySearch: filteraction.payload };

    case "FILTER_BY_RATING":
      return { ...filterstate, byRating: filteraction.payload };

    case "FILTER_BY_STOCK":
      return { ...filterstate, byStock: !filterstate.byStock };

    case "CLEAR_FILTERS":
      return {
        bySort: "",
        byPlantCategory: false,
        byPotCategory: false,
        byToolCategory: false,
        bySearch: "",
        byStock: false,
        byRating: 0,
        byRange: 900,
      };

    default:
      return filterstate;
  }
};
