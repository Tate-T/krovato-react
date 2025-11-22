import { createSlice } from "@reduxjs/toolkit";
import { getReviewsThunk, addReviewThunk, deleteReviewThunk, updateReviewLikesThunk } from "../../thunk/reviewsThunk";

const getInitialLikedReviews = () => {
  try {
    const stored = localStorage.getItem("likedReviews");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState = {
  reviews: [],
  likedReviews: getInitialLikedReviews(),
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const reviewId = action.payload;
      const review = state.reviews.find((r) => r.id === reviewId);
      if (!review) return;

      const isLiked = state.likedReviews.includes(reviewId);

      if (isLiked) {
        state.likedReviews = state.likedReviews.filter(id => id !== reviewId);
        review.likes = (review.likes || 0) - 1;
      } else {
        state.likedReviews.push(reviewId);
        review.likes = (review.likes || 0) + 1;
      }

      localStorage.setItem("likedReviews", JSON.stringify(state.likedReviews));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReviewsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.map((review) => ({
          ...review,
          likes: review.likes || 0,
        }));
      })
      .addCase(getReviewsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addReviewThunk.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
      })
      .addCase(deleteReviewThunk.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((review) => review.id !== action.payload);
      })
      .addCase(updateReviewLikesThunk.fulfilled, (state, action) => {
        const review = state.reviews.find((r) => r.id === action.payload.id);
        if (review) {
          review.likes = action.payload.likes;
        }
      });
  },
});

export const { toggleLike } = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;

