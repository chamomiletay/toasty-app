require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');

const app = express();
const journalController = require('./backend/controllers/journalController')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
//*note: CHANGE CONTROLLER NAME LATER
app.use('/journal/', journalController);

const port = process.env.PORT || 4009;

app.listen(port, () => {
    console.log(`App is running on ${port}!`)
})