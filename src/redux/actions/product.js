export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const fetchProductsRequest = () => ({
  type: "FETCH_PRODUCTS_REQUEST",
});

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const { products } = getState();

    console.log("alo");

    if (products.products.length > 0) {
      dispatch(setProducts(products.products));
    } else {
      try {
        const response = await fetch(
          "https://iluminaecommercenodejs-production.up.railway.app/furnitures",
        );
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
  };
};
