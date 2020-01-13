// defines note model
// timestamps used by mongoose to automatically add createat and createby to schema

const mongoose = require('mongoose');
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const NoteSchema = mongoose.Schema({
    title:String,
    content:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);