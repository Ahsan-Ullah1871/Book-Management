import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Books from "../components/Home/Books";
import { setType } from "../features/filter/filterSlice";

const Home = () => {
	const dispatch = useDispatch();

	const { featured } = useSelector((state) => state.filter_book);

	// Handle search
	const selectType = () => {
		dispatch(setType(!featured));
	};

	return (
		<div class="order-2 xl:-order-1">
			<div class="flex items-center justify-between mb-12">
				<h4 class="mt-2 text-xl font-bold">Book List</h4>

				<div class="flex items-center space-x-4">
					<button
						class={`lws-filter-btn ${
							!featured && "active-filter"
						}`}
						onClick={selectType}
					>
						All
					</button>
					<button
						class={`lws-filter-btn ${
							featured && "active-filter"
						}`}
						onClick={selectType}
					>
						Featured
					</button>
				</div>
			</div>

			{/* Book list */}
			<Books />
		</div>
	);
};

export default Home;
