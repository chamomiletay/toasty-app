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
    Entry.findById(req.params.id)
    .then((entries) => {
        res.send(entries);
    })
    .catch(next)
})


//--- create a new journal entry and return current list ---//
router.post('/', (req, res) => {
//--- check if route is accessed ---//
    console.log('create route has been reached');

    Entry.create(req.body)
    .then ((entries) => {
        res.redirect('/')
    })
    .catch(err => res.send(err))
})


//--- update existing journal entry  ---//
router.put('/:id', (req, res) => {
    //--- check if route is accessed ---//
    console.log('update route has been reached');

    Entry.findOneAndUpdate(
        {_id: req.params.id}, req.body).then(entries =>
            res.send(entries)
    );
});

//--- delete existing journal entry ---//
router.delete('/:id', (req, res) => {
    //--- check if route is accessed ---//
    console.log('delete route has been reached');
    
    Entry.findOneAndRemove(
        {_id: req.params.id},
    )
    .then( () => res.redirect('/'))
    .catch(err => res.send(err))
})




//--- export router! ---//
module.exports = router;