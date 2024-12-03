import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initalState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initalState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity += 1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
