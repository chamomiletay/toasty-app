const express = require('express');
const router = express.Router();

//-------- ROUTES --------//

//test route
router.get('/test', (req, res) => {
    res.send('I work!!');
})

module.exports = router;