const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name:String,
  image:String,
  isbn:String,
  pages:String,
  price:String,
  publisher:String,
});

const Book = new mongoose.model("BOOK", bookSchema);

module.exports = Book;