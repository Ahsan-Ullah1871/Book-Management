import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5001/api/v1/",
	}),
	tagTypes: ["books", "book"],
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: () => "/books",
			keepUnusedDataFor: 600,
			providesTags: ["books"],
			transformResponse: (response) => response.data,
		}),
		getBook: builder.query({
			query: (id) => ({
				url: `/books/${id}`,
				method: "GET",
			}),
			keepUnusedDataFor: 600,
			providesTags: (result, error, arg) => [
				{ type: "book", id: arg },
			],
			transformResponse: (response) => response.data,
		}),
		addBook: builder.mutation({
			query: (data) => ({
				url: `/books`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: (result, error, arg) => ["books"],
		}),
		editBook: builder.mutation({
			query: ({ id, data }) => ({
				url: `/books/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: (result, error, arg) => [
				"books",
				{ type: "book", id: arg.id },
			],
		}),
		deleteBook: builder.mutation({
			query: (id) => ({
				url: `/books/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, arg) => ["books"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetBookQuery,
	useEditBookMutation,
	useDeleteBookMutation,
	useAddBookMutation,
} = apiSlice;
