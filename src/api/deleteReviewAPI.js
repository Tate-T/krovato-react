import axios from "axios";

export const deleteReviewAPI = async (id) => {
  await axios.delete(`https://684032305b39a8039a572c19.mockapi.io/reviews/${id}`);
  return id;
};
