const Entry = require('../models/journalSchema');
const data = require('./journalEntry.json');

//--- delete existing data and seed new data ---//
Entry.deleteMany({})
    .then(() => {
        return Entry.insertMany(data);
    })
    .then(console.log)
    .catch(console.error)
    .finally(()=> {
        //-- terminate process --//
        process.exit();
    })