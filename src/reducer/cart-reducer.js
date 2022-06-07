export const cartReducerFunction = (cartState, cartaction) => {
  switch (cartaction.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [...cartState.cart, { ...cartaction.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartState.cart.filter(
          (item) => item.id !== cartaction.payload.id
        ),
      };

    case "INCREASE_QTY":
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item.id === cartaction.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item.id === cartaction.payload
            ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty }
            : item
        ),
      };

    default:
      return cartState;
  }
};
