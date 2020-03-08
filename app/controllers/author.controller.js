const author = require('../models/author.model.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    author.find().limit(10)
        .then(authors => {
            res.send(authors);
            console.log(authors)
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findByName = (req, res) => {
    console.log(req);
    author.find({name: { $regex: req.params.name}})
        .then(authors => {
            res.send(authors);
            console.log(authors)
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
