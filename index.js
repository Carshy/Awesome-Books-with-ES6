/* eslint-disable max-classes-per-file */

import Book from './modules/book.js';
import Storage from './modules/storage.js';
import UI from './modules/ui.js'
import { DateTime } from './modules/luxon.js';

// define the current local time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date-time').innerHTML = currentDate;

// Store Class: Handles local storage of books

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#form').addEventListener('submit', () => {
  // Get form Values from the input fields
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  Storage.addBook(book);
  UI.clearFields();
});

// Event: Deletes a Book
document.querySelector('#book-collection').addEventListener('click', (e) => {

// Remove book from UI
  UI.deleteBook(e.target);

// Remove book from Store
Storage.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

// *****************Variables for targetting "bookList, "addaBook", and "contactDetails"***************
const bookCollection = document.querySelector('#book-collection');
const addaBook = document.querySelector('#add-books');
const contactDetails = document.querySelector('#contact-display');
const listLink = document.querySelector('#list-link');
const titleDismiss = document.querySelector('.books');

// *****************Displaying the Book List page when clicking "List"***************
listLink.addEventListener('click', () => {
  bookCollection.style.display = 'block';
  addaBook.style.display = 'none';
  contactDetails.style.display = 'none';
});

window.addEventListener('load', () => {
  bookCollection.style.display = 'block';
  addaBook.style.display = 'none';
  contactDetails.style.display = 'none';
});

// *****************Displaying the Add a Book page when clicking "Add New"***************
const addNewLink = document.querySelector('#add-new-link');
addNewLink.addEventListener('click', () => {
  addaBook.style.display = 'flex';
  bookCollection.style.display = 'none';
  contactDetails.style.display = 'none';
  titleDismiss.style.display = 'none';
});

// *****************Displaying the Contact page when clicking "Contact"***************
const contactLink = document.querySelector('#contact-link');
contactLink.addEventListener('click', () => {
  contactDetails.style.display = 'block';
  bookCollection.style.display = 'none';
  addaBook.style.display = 'none';
  titleDismiss.style.display = 'none';
});

// *****************Displaying the Book List page when clicking "Add" Button***************
const addButtonLink = document.querySelector('.addbtn');
addButtonLink.addEventListener('click', () => {
  bookCollection.style.display = 'block';
  contactDetails.style.display = 'none';
  addaBook.style.display = 'none';
});

/* eslint-disable max-classes-per-file */