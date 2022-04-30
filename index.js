
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const cors = require('cors');
const app = express();
const methodOverride = require('method-override');


const journalController = require('./controllers/journalController');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(cors());
app.use('/journal/', journalController);

app.set('views', 'views')

app.use(express.static('public'));

const port = process.env.PORT || 4009;

app.listen(port, () => {
    console.log(`App is running on ${port}!`)
})