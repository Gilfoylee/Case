const Book = require('../models/book')
const apiResponse = require("../helpers/apiResponse")

/**
 * Retrieve book from mongodb.
 *
 * @param {Object}      req
 *
 * @returns {Object}
 */
async function getBook(req) {
    try {
        return await Book.findById(req.params.id);
    } catch (error) {
        return null;
    }
}

/**
 * Build book model.
 *
 * @param {Object}      req
 *
 * @returns {Object}
 */
function buildBookModel(req) {
    return new Book({
        title: req.body.title,
        price: req.body.price,
        isbn: req.body.isbn,
        language: req.body.language,
        publisher: req.body.publisher,
        numberOfPages: req.body.numberOfPages,
        author: req.body.author
    });
}

/**
 * Build book patch model.
 *
 * @param {Object}      req
 * @param {Object}      book
 *
 * @returns {Object}
 */
function buildBookPatchModel(req, book) {
    if (req.body.title != null) {
        book.title = req.body.title;
      }
      if (req.body.price != null) {
        book.price = req.body.price;
      }
      if (req.body.isbn != null) {
        book.isbn = req.body.isbn;
      }
      if (req.body.language != null) {
        book.language = req.body.language;
      }
      if (req.body.publisher != null) {
        book.publisher = req.body.publisher;
      }
      if (req.body.numberOfPages != null) {
        book.numberOfPages = req.body.numberOfPages;
      }
      if (req.body.author != null) {
        book.author = req.body.author;
      }

    return book;
}

/**
 * Get all books.
 * 
 * @returns {Object}
 */
exports.bookList = [
    async function (req, res) {
        try {
            const books = await Book.find();

            return apiResponse.successResponseWithData(res, "Operation success", books);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Books cannot retrieved");
        }
    }
];

/**
 * Get single book.
 * 
 * @param {string}      id
 * 
 * @returns {Object}
 */
exports.bookDetail = [
    async function (req, res) {
        try {
            const book = await getBook(req);
            if (book == null) {
                return apiResponse.notFoundResponse(res, "Book not found")
            }

            return apiResponse.successResponseWithData(res, "Operation success", book);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Book cannot retrieved");
        }
    }
];

/**
 * Delete book.
 * 
 * @param {string}      id
 * 
 * @returns {Object}
 */
exports.deleteBook = [
    async function (req, res) {
        try {
            const book = await getBook(req);
            if (book == null) {
                return apiResponse.notFoundResponse(res, "Book not found");
            }

            await book.remove();
            return apiResponse.successResponseWithData(res, "Operation success", book);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Book cannot deleted");
        }
    }
];

/**
 * Create book.
 *
 * @param {string}      title
 * @param {number}      price
 * @param {string}      isbn
 * @param {string}      language
 * @param {string}      publisher
 * @param {number}      numberOfPages
 * @param {string}      author
 * 
 * @returns {Object}
 */
exports.createBook = [
    async function (req, res) {
        try {
            const book = buildBookModel(req);
            const newBook = await book.save();
            return apiResponse.successResponseWithData(res, "Operation success", newBook);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Book cannot be created");
        }
    }
];

/**
 * Update book.
 * 
 * @param {string}      id
 * @param {string}      title
 * @param {number}      price
 * @param {string}      isbn
 * @param {string}      language
 * @param {string}      publisher
 * @param {number}      numberOfPages
 * @param {string}      author
 * 
 * @returns {Object}
 */
exports.updateBook = [
    async function (req, res) {
        try {
            const book = await getBook(req);
            if (book == null) {
                return apiResponse.notFoundResponse(res, "Book not found");
            }

            tempBook = buildBookPatchModel(req, book);
            const updatedBook = await tempBook.save();
            return apiResponse.successResponseWithData(res, "Operation success", updatedBook);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Book cannot be updated");
        }
    }
];