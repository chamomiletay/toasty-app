const express = require('express');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
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


//--- render index page ---//
router.get('/index', (req, res, next) => {
    console.log('index route has been reached!')
    Entry.find({})
    .then((entries) => {
        res.render('index', {entries:entries})
    })
    .catch(next)
})


//--- retrieve journal entry by id ---//
router.get('/:id/edit', (req, res, next) => {
    Entry.findById(req.params.id)
    .then((entries) => {
        res.render('edit', entries);
    })
    .catch(next)
})


//--- redirect to create new journal entry page ---//
router.get('/new', (req, res) => {
    console.log('new route has been reached!');
    res.render('new');
})


//--- create a new journal entry and return current list ---//
router.post('/', (req, res) => {
//--- check if route is accessed ---//
    console.log('create route has been reached');

    Entry.create(req.body)
    .then ((entries) => {
        res.redirect('/journal/index')
    })
    .catch(err => res.send(err))
})

//---- show page of existing entry (by id) ----//
router.get('/:id', (req, res) => {
    Entry.findById(req.params.id)
    .then(entries =>
        res.render('show', entries))
})

//--- update existing journal entry  ---//
router.put('/:id', (req, res) => {
    //--- check if route is accessed ---//
    console.log('update route has been reached');

    Entry.findOneAndUpdate(
        {_id: req.params.id},
        {
            date: req.body.date,
            mood: req.body.mood,
            entry: req.body.entry
        }, 
        {new: true}
        )
        .then(entry => {
            res.render('show', entry)
        })
        .catch(console.error);
});


//--- delete existing journal entry ---//
router.delete('/:id', (req, res) => {
    //--- check if route is accessed ---//
    console.log('delete route has been reached');
    
    Entry.findOneAndRemove(
        {_id: req.params.id},
    )
    .then( () => res.redirect('/journal/index'))
    .catch(err => res.send(err))
})




//--- export router! ---//
module.exports = router;