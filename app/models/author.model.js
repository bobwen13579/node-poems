const mongoose = require('mongoose');

const { Schema } = mongoose;

const authors = new Schema();

module.exports = mongoose.model('authors', authors);
