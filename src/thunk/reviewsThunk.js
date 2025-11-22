import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReviewsAPI } from "../api/getReviewsAPI";
import { addReviewAPI } from "../api/addReviewAPI";
import { deleteReviewAPI } from "../api/deleteReviewAPI";
import { updateReviewLikesAPI } from "../api/updateReviewLikesAPI";

export const getReviewsThunk = createAsyncThunk("reviews/getReviews", async () => {
  return getReviewsAPI();
});

export const addReviewThunk = createAsyncThunk("reviews/addReview", async (reviewData) => {
  return addReviewAPI(reviewData);
});

export const deleteReviewThunk = createAsyncThunk("reviews/deleteReview", async (id) => {
  return deleteReviewAPI(id);
});

export const updateReviewLikesThunk = createAsyncThunk("reviews/updateLikes", async ({ id, likes }) => {
  return updateReviewLikesAPI({ id, likes });
});

