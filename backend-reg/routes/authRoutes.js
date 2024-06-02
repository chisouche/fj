const express = require('express');
const router = express.Router();


router.post('/v1/signup', (req, res) => {
    // Handle user signup
    res.send('User signed up');
});

module.exports = router;
