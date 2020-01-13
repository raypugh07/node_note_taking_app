// defines routes

module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // create a new note
    app.post('/notes', notes.create);

    // retrieve all notes
    app.get('/notes', notes.findAll);

    //retrieve a single note via noteid
    app.get('/notes/:noteId', notes.update);

    //update a note with note id
    app.put('/notes/:noteId', notes.findOne);

    //delate a note with note id
    app.delete('/notes/:noteId', notes.delete);
    
}