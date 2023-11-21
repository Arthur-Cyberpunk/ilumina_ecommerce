import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://iluminaecommercenodejs-production.up.railway.app/furnitures",
      );
      dispatch({ type: "SET_DATA", payload: response.data });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };
};
