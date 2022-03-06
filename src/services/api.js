import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const phonebookApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61ffc1895e1c4100174f6f2a.mockapi.io/",
  }),
  tagTypes: ["Contacts", "Users"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (id) => `users/${id}/contacts`,
      providesTags: ["Contacts"],
    }),

    getUsers: builder.query({
      query: () => `users`,
      providesTags: ["Users", "Contacts"],
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["Users", "Contacts"],
    }),

    deleteContactById: builder.mutation({
      query: ([userId, contactId]) => ({
        url: `users/${userId}/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    postContact: builder.mutation({
      query: ([userId, contact]) => ({
        url: `users/${userId}/contacts`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    registerUser: builder.mutation({
      query: (user) => ({
        url: `users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users", "Contacts"],
    }),
  }),
});

const {
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterUserMutation,
} = phonebookApi;

export {
  phonebookApi,
  useGetUsersQuery,
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
  useGetUserByIdQuery,
  useRegisterUserMutation,
};
