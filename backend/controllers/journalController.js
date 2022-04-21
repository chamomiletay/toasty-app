const express = require('express');
const router = express.Router();

//-- require journal entry model --//
const Entry = require('../models/journalSchema');


//-------- ⍣✧ ROUTES ✧⍣ --------//

//--- test route ---//
router.get('/test', (req, res) => {
    res.send('I work!!');
})


//--- compile list of journal entries (json) ---//
router.get('/', (req, res, next) => {
    Entry.find({})
    .then((entries) => {
        res.send(entries);
    })
    .catch(next)
})

//--- compile list of journal entries ---//
// router.get('/', (req, res, next) => {
//     Entry.find({})
//     .then((entries) => {
//         res.send(entries);
//     })
//     .catch(next)
// })


//--- retrieve journal entry by id ---//
router.get('/:id', (req, res, next) => {

})


//--- create a new journal entry and return current list ---//
router.post('/', (req, res) => {
//--- check if route is accessed ---//
    console.log('you have reached your destination');
    //[Create info goes here]
})

//--- export router! ---//
module.exports = router;