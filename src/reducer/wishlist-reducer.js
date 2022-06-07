export const wishlistReducerFunction = (wishlistState, wishlistAction) => {
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlist: [...wishlistState.wishlist, { ...wishlistAction.payload }],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlist: wishlistState.wishlist.filter(
          (item) => item.id !== wishlistAction.payload.id
        ),
      };
  }
};
