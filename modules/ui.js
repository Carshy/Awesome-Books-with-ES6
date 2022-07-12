import Storage from './storage.js';
// UI Class: Displays listed Books
class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-col');
    const addedbook = document.createElement('div');
    addedbook.innerHTML = `
        <div class="display-collection">
          <p class="book-info">${book.title}</p>
          <p class="book-info" id="book-info-author"><span>by</span>${book.author}</p>
          <button type="submit" class="delete">Remove</button>
          <hr>
        </div>
        `;
    list.appendChild(addedbook);
  }

  // Event: Deletes a Book
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  // Event: Clears data
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default UI;