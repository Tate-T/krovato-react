import axios from "axios";

export const getReviewsAPI = async () => {
  const response = await axios.get("https://684032305b39a8039a572c19.mockapi.io/reviews");
  return response.data;
};
