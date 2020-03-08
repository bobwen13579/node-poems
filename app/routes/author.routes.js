module.exports = (app) => {
    const author = require('../controllers/author.controller.js');


    // Retrieve all Notes
    app.get('/authors', author.findAll);

    // Retrieve a single Note with noteId
    app.get('/authors/:name', author.findByName);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}
