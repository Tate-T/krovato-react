import axios from "axios";

export const addReviewAPI = async (reviewData) => {
  const response = await axios.post("https://684032305b39a8039a572c19.mockapi.io/reviews", reviewData);
  return response.data;
};
