import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main class="py-6 2xl:px-6 container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/addbook"
						element={<AddBook />}
					/>
					<Route
						path="/editbook/:bookID"
						element={<EditBook />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;

