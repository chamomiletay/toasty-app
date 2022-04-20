const express = require('express');
const app = express();
const journalController = require('./controllers/journalController')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//*note: CHANGE CONTROLLER NAME LATER
app.use('/journal/', journalController);

const port = process.env.PORT || 4009;

app.listen(port, () => {
    console.log(`App is running on ${port}!`)
})