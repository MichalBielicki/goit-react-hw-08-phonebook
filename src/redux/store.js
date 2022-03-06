import { configureStore } from "@reduxjs/toolkit";
import { phonebookApi } from "../services/api";
import { filterReducer, userLoginReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter: filterReducer,
    loggedUser: userLoginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
