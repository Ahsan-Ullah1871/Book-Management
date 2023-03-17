import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/ApiSlice";
import Book from "./Book";

const Books = () => {
	const {
		data: books,
		isLoading,
		isError,
		isSuccess,
	} = useGetBooksQuery();

	// filter slector
	const { search_text, featured } = useSelector(
		(state) => state.filter_book
	);

	//Search by title
	const searchByTitle = (book) => {
		return book.name
			.replace(/\s+/g, "")
			.toUpperCase()
			.includes(search_text.replace(/\s+/g, "").toUpperCase());
	};
	//Search by Type
	const selectByType = (book) => {
		if (featured) {
			return book.featured;
		} else {
			return book;
		}
	};

	//decide UI
	let content = null;

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	if (!isLoading && isError) content = <p>There have an error </p>;

	if (!isLoading && !isError && books?.length == 0)
		content = <p>No books available</p>;

	if (!isLoading && !isError && books?.length > 0) {
		content = books
			.filter(selectByType)
			.filter(searchByTitle)
			.map((book) => <Book key={book.id} book={book} />);
	}

	return (
		<div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
			{content}
		</div>
	);
};

export default Books;
