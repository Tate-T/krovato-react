import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsAPI } from "../../api/getProductsAPI";

export const getProductsThunk = createAsyncThunk("products/get", async () => {
  return await getProductsAPI();
});