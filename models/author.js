const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Author', authorSchema)