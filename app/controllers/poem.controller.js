const poems = require('../models/poem.model.js');

// Retrieve and return all notes from the database.
exports.findList = (req, res) => {
    poems.find({},{title:1}).limit(10)
        .then(poem => {
            res.send(poem);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findBytitle = (req, res) => {
    console.log(req.params.name);
    poems.find({title: { $regex: req.params.title}}).limit(20)
        .then(poem => {
            res.send(poem);
            console.log(poem)
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findByauthor = (req, res) => {
    console.log(req.params.content)
    poems.find({author: { $regex: req.params.author}}).limit(20)
        .then(poem => {
            res.send(poem);
            console.log(poem)
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
