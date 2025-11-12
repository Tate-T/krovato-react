import axios from "axios";

export const getProductsAPI =  async () => {
  const response = await axios.get("https://690a0db01a446bb9cc21295a.mockapi.io/Producyts")
  return response.data
};
