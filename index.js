
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');

const journalController = require('./backend/controllers/journalController');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(cors());
app.use('/journal/', journalController);

app.set('view engine', 'ejs');
app.use(ejsLayouts);

const port = process.env.PORT || 4009;

app.listen(port, () => {
    console.log(`App is running on ${port}!`)
})