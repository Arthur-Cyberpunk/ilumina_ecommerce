export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://iluminaecommercenodejs-production.up.railway.app/furnitures",
      );
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };
};
