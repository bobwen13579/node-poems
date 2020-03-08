module.exports = (app) => {
    const poems = require('../controllers/poem.controller.js');


    // Retrieve all Notes
    app.get('/poems', poems.findList);

    // Retrieve a single Note with noteId
    app.get('/poems/title/:title', poems.findBytitle);
    app.get('/poems/author/:author', poems.findByauthor);
    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
};
