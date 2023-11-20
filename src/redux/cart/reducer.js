import CartActionTypes from "./action-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some((product) => {
        console.log(product);
        return product._id === action.payload._id;
      });

      console.log(productIsAlreadyInCart);

      if (productIsAlreadyInCart) {
        const updatedProducts = state.products.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );

        console.log("Updated Products:", updatedProducts);

        return {
          ...state,
          products: updatedProducts,
        };
      }

      console.log("New Product:", action.payload);
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
