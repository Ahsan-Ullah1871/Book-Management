# Book Management Application

This project is a book management application built using React, Redux Toolkit
(RTK) Query, and React Router. The application allows users to view, add, edit,
and delete books from a list stored on a server. This README will guide you
through the setup, features, and usage of the application.

## Features

- **Book List Display:** On page load, fetches and displays a list of books from
  the server using RTK Query.
- **Add Book:** Allows users to add a new book through a form. The book is saved
  to the server using RTK Query Mutation and redirects to the Home page after
  successful submission.
- **Book Filtering:** Provides two tags, 'All' and 'Featured', to filter the
  displayed books on the client side.
- **Search Functionality:** Includes a search bar in the navigation menu to
  search books by their names. Displays search results in the Book List section.
- **Edit Book:** Allows users to edit book details. Navigates to an edit page
  with pre-filled form data using React Router. Updates the book details on the
  server upon submission and redirects to the Home page.
- **Delete Book:** Deletes a book from the server when the delete button is
  clicked.

## Installation

1. Clone the repository:
      ```bash
      git clone https://github.com/yourusername/book-management-app.git
      ```
2. Navigate to the project directory:
      ```bash
      cd book-management-app
      ```
3. Install the dependencies:
      ```bash
      npm install
      ```
4. Start the development server:
      ```bash
      npm start
      ```

## Usage

### Book List Display

- On page load, the application fetches the list of books from the server and
  displays them on the home page.

### Add Book

1. Navigate to the 'Add Book' page.
2. Fill out the book details in the form.
3. Submit the form to save the book to the server.
4. The application will redirect to the Home page after successful submission.

### Book Filtering

- Click on the 'All' tag to view all books.
- Click on the 'Featured' tag to view only the featured books.

### Search Functionality

- Use the search bar in the navigation menu to search for books by their names.
- The search results will be displayed in the Book List section.
- Clearing the search bar will display all books.

### Edit Book

1. Click on the 'Edit' icon on a book card.
2. The application will navigate to the edit page with the book's details
   pre-filled in the form.
3. Update the book details and submit the form.
4. The application will update the book on the server and redirect to the Home
   page.

### Delete Book

- Click on the 'Delete' button on a book card to delete the book from the
  server.

## Technologies Used

- React
- Redux Toolkit (RTK) Query
- React Router
- CSS
