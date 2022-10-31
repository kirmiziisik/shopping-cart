const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    const tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let tempTotal = 0;
    let tempAmount = 0;
    state.cart.map((item) => {
      const { price, amount } = item;
      tempTotal += amount * price;
      tempAmount += amount;
    });
    return {
      ...state,
      total: parseFloat(tempTotal.toFixed(2)),
      amount: tempAmount,
    };
  }
  return state;
};

export default reducer;
