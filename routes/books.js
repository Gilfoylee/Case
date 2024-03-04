const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book')

// Getting all
router.get("/", BookController.bookList);

// Getting One
router.get('/:id', BookController.bookDetail);

// Creating one
router.post('/', BookController.createBook);

// Updating one
router.patch('/:id', BookController.updateBook);

// Deleting One
router.delete('/:id', BookController.deleteBook);

module.exports = router