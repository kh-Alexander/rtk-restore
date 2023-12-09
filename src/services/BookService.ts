import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllbooks: build.query<IPost[], number>({
      query: (limit: number = 4) => ({
        url: "/books",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/books`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/books/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/books/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
