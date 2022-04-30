//--- require mongoose ! ---//
const mongoose = require('../db/connection');

//--- create new schema, capitalize first letter ---//
// data to be logged: date, mood, journal entry
const JournalSchema = new mongoose.Schema(
    {
        date: {type: String, required: true},
        mood: String,
        entry: String
    },
    {timestamps: true}
);

//--- export schema ---//
const Entry = mongoose.model('Entry', JournalSchema);
module.exports = Entry;