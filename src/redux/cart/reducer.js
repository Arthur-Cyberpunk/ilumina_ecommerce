import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product) => product._id === action.payload._id,
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product._id === action.payload._id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

// return {
//     ...state,
//     products: [state.products, action.payload],
//   };

export default cartReducer;
