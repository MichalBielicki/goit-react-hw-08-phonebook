import { createAction } from "@reduxjs/toolkit";

const filterContacts = createAction("filter/Filter");
const userLoggedIn = createAction("loggedIn/LoggedIn");

export { filterContacts, userLoggedIn };
