import CartActionTypes from "./action-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.findIndex(
        (product) => product._id === action.payload[0]._id,
      );

      if (productIsAlreadyInCart !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[productIsAlreadyInCart].quantity += 1;

        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload[0], quantity: 1 }],
        };
      }
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload,
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product._id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          )
          .filter((product) => product.quantity > 0),
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
