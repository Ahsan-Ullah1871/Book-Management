import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../../features/api/ApiSlice";

const AddBookForm = () => {
	const navigate = useNavigate();
	//edite book query
	const [addBook, { data: book, isLoading, isError, isSuccess }] =
		useAddBookMutation();

	// Form state
	const [formState, setFormState] = useState({});

	const onChangeValue = (key_name, value) => {
		setFormState((prev) => ({ ...prev, [key_name]: value }));
	};

	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		addBook({ ...formState, featured: formState?.featured ?? false });
		resetForm();
	};

	// Reset form
	const resetForm = () => {
		setFormState({});
		document.getElementById("add-book-form").reset();
	};

	// After add success will move back to home
	useEffect(() => {
		if (isSuccess) {
			navigate("/");
		}
	}, [isSuccess, navigate]);

	return (
		<form
			class="book-form"
			id="add-book-form"
			onSubmit={handleSubmit}
		>
			<div class="space-y-2">
				<label for="tech-lab-bookName">Book Name</label>
				<input
					required
					class="text-input"
					type="text"
					id="tech-lab-bookName"
					name="name"
					value={formState?.name}
					onChange={(e) =>
						onChangeValue("name", e.target.value)
					}
				/>
			</div>

			<div class="space-y-2">
				<label for="tech-lab-author">Author</label>
				<input
					required
					class="text-input"
					type="text"
					id="tech-lab-author"
					name="author"
					value={formState?.author}
					onChange={(e) =>
						onChangeValue(
							"author",
							e.target.value
						)
					}
				/>
			</div>

			<div class="space-y-2">
				<label for="tech-lab-thumbnail">Image Url</label>
				<input
					required
					class="text-input"
					type="text"
					id="tech-lab-thumbnail"
					name="thumbnail"
					value={formState?.thumbnail}
					onChange={(e) =>
						onChangeValue(
							"thumbnail",
							e.target.value
						)
					}
				/>
			</div>

			<div class="grid grid-cols-2 gap-8 pb-4">
				<div class="space-y-2">
					<label for="tech-lab-price">Price</label>
					<input
						required
						class="text-input"
						type="number"
						id="tech-lab-price"
						name="price"
						value={formState?.price}
						onChange={(e) =>
							onChangeValue(
								"price",
								e.target.value
							)
						}
					/>
				</div>

				<div class="space-y-2">
					<label for="tech-lab-rating">Rating</label>
					<input
						required
						class="text-input"
						type="number"
						id="tech-lab-rating"
						name="rating"
						min="1"
						max="5"
						value={formState?.rating}
						onChange={(e) =>
							onChangeValue(
								"rating",
								e.target.value
							)
						}
					/>
				</div>
			</div>

			<div class="flex items-center">
				<input
					id="tech-lab-featured"
					type="checkbox"
					name="featured"
					class="w-4 h-4"
					checked={formState?.featured ?? false}
					onChange={(e) =>
						onChangeValue(
							"featured",
							formState?.featured
								? false
								: true
						)
					}
				/>
				<label
					for="tech-lab-featured"
					class="ml-2 text-sm"
				>
					{" "}
					This is a featured book{" "}
				</label>
			</div>

			<button
				type="submit"
				class="submit"
				id="tech-lab-submit"
			>
				Add Book
			</button>

			{isSuccess && <p>Book added successfully</p>}
			{isError && <p>There have an error</p>}
		</form>
	);
};

export default AddBookForm;
