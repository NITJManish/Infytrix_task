import { configureStore } from "@reduxjs/toolkit";
import { salesApi } from "./api/sales";

export const store = configureStore({
  reducer: {
    [salesApi.reducerPath]: salesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      salesApi.middleware,
    ]),
});
