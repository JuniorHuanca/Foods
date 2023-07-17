import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductByApi, getProductsByApi } from "./productsApi";
import { EStateGeneric, IFoodAPI } from "@/shared/types";
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

export const getOneProduct = createAsyncThunk(
  "products/getOneProduct",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getProductByApi(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

type typesState = {
  products: IFoodAPI[];
  product: IFoodAPI;
  filters: [];
  allProductsStatus: EStateGeneric;
  oneProductStatus: EStateGeneric;
};

const initialState = {
  products: [],
  product: {} as IFoodAPI,
  filters: [],
  allProductsStatus: EStateGeneric.IDLE,
  oneProductStatus: EStateGeneric.IDLE,
} as typesState;

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
    cleanUpProduct: (state) => {
      return {
        ...state,
        product: {} as IFoodAPI,
        oneProductStatus: EStateGeneric.IDLE,
      };
    },
    sortByName: (state, action) => {
      const items = state.products;
      const sorted =
        action.payload === "atoz"
          ? items.slice().sort((a, b) => a.title.localeCompare(b.title))
          : items.slice().sort((a, b) => b.title.localeCompare(a.title));
      return {
        ...state,
        products: sorted,
      };
    },
    sortByScore: (state, action) => {
      const items = state.products;
      const sorted =
        action.payload === "asc"
          ? items.slice().sort((a, b) => a.healthScore - b.healthScore)
          : items.slice().sort((a, b) => b.healthScore - a.healthScore);
      return {
        ...state,
        products: sorted,
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

    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.oneProductStatus = EStateGeneric.SUCCEEDED;
    });
    builder.addCase(getOneProduct.pending, (state, action) => {
      state.oneProductStatus = EStateGeneric.PENDING;
    });
    builder.addCase(getOneProduct.rejected, (state, action) => {
      state.oneProductStatus = EStateGeneric.FAILED;
    });
  },
});

export const selectAllProductsStatus = (state: RootState) =>
  state.products.allProductsStatus;
export const selectOneProductStatus = (state: RootState) =>
  state.products.oneProductStatus;

export const {
  cleanUpProducts,
  cleanUpProduct,
  setFilters,
  sortByName,
  sortByScore,
} = productsSlice.actions;
export default productsSlice.reducer;

export const allFilters = (store: RootState) => store.products.filters;
export const selectAllProducts = (state: RootState) => state.products.products;
export const selectOneProduct = (state: RootState) => state.products.product;
