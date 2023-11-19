export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://iluminaecommercenodejs-production.up.railway.app/furnitures",
      );
      const data = await response.json();
      dispatch({
        type: "SET_DATA",
        payload: data,
      });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };
};
