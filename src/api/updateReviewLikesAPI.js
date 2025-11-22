import axios from "axios";

export const updateReviewLikesAPI = async ({ id, likes }) => {
  const response = await axios.put(`https://684032305b39a8039a572c19.mockapi.io/reviews/${id}`, { likes });
  return response.data;
};
