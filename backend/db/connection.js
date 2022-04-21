require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI =
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : "mongodb+srv://chamomiletay:Matchaicecream5420@cluster0.kjat8.mongodb.net/toasty-app?retryWrites=true&w=majority"
//--- encrypt URI later !! ---//


mongoose.connect(mongoURI)
    .then((instance) => 
        console.log(`connected to db: ${instance.connections[0].name}`))
    .catch((err) => 
        console.log(`connection to db failed: ${err}`))

module.exports = mongoose;