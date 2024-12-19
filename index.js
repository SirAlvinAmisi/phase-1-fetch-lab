function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books") // Fetch data from the API
    .then((response) => response.json()) // Convert response to JSON
    .then((books) => renderBooks(books)) // Pass the data to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Optional error handling
}

function renderBooks(books) {
  const main = document.querySelector('main'); // Select the <main> element
  books.forEach(book => {
    const h2 = document.createElement('h2'); // Create a new <h2> element
    h2.innerHTML = book.name; // Set the book name as the content
    main.appendChild(h2); // Append the <h2> to the <main>
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks when the DOM is fully loaded
});
