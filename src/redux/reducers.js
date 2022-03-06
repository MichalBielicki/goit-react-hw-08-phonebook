import { createReducer } from "@reduxjs/toolkit";
import { filterContacts, userLoggedIn } from "./actions";

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

const userLoginReducer = createReducer(false, {
  [userLoggedIn]: (state, { payload }) => payload,
});

export { filterReducer, userLoginReducer };
