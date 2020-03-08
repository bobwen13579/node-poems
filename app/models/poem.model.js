const mongoose = require('mongoose');

const { Schema } = mongoose;

const poems = new Schema();

module.exports = mongoose.model('poems', poems);
