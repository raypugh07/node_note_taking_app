// defines note model
// timestamps used by mongoose to automatically add createat and createby to schema

const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title:String,
    content:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);