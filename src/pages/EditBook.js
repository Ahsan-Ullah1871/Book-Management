import React from "react";
import { useParams } from "react-router-dom";
import EditBookForm from "../components/EditBook/EditBookForm";
import { useEditBookMutation, useGetBookQuery } from "../features/api/ApiSlice";

const EditBook = () => {
	const { bookID } = useParams();
	const { data: book, isLoading, isError } = useGetBookQuery(bookID);

	// decide
	let content = null;

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	if (!isLoading && isError) content = <p>There have an error </p>;

	if (!isLoading && !isError && !book?.id)
		content = <p>There have an error </p>;

	if (!isLoading && !isError && book?.id) {
		content = <EditBookForm book={book} />;
	}

	return (
		<div class="container">
			<div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
				<h4 class="mb-8 text-xl font-bold text-center">
					Edit Book
				</h4>
				{content}
			</div>
		</div>
	);
};

export default EditBook;
