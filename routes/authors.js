const express = require('express')
const router = express.Router()
const AuthorController = require('../controllers/author')

// Getting all
router.get("/", AuthorController.authorList);

// Getting One
router.get('/:id', AuthorController.authorDetail);

// Creating one
router.post('/', AuthorController.createAuthor);

// Updating one
router.patch('/:id', AuthorController.updateAuthor);

// Deleting One
router.delete('/:id', AuthorController.deleteAuthor);

module.exports = router