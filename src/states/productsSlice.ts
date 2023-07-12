import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsByApi } from "./productsApi";
import { EStateGeneric } from "@/shared/types";
import { RootState } from "./store";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductsByApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  filters: [],
  allProductsStatus: EStateGeneric.IDLE,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProducts: (state) => {
      return {
        ...state,
        products: [],
        allProductsStatus: EStateGeneric.IDLE,
      };
    },
    setFilters: (state, action) => {
      return {
        ...state,
        filters: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProductsStatus = EStateGeneric.SUCCEEDED;
    });
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.allProductsStatus = EStateGeneric.PENDING;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.allProductsStatus = EStateGeneric.FAILED;
    });
  },
});

export const selectAllProductsStatus = (state: RootState) =>
  state.products.allProductsStatus;

export const { cleanUpProducts, setFilters } = productsSlice.actions;
export default productsSlice.reducer;

export const allFilters = (store: RootState) => store.products.filters;
export const selectAllProducts = (state: RootState) => state.products.products;
