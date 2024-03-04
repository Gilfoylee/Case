const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  numberOfPages: {
    type: Number,
    required: true
  },
  author: { 
    type: mongoose.Schema.ObjectId, 
    ref: "Author", 
    required: true 
  }
})

module.exports = mongoose.model('Book', bookSchema)