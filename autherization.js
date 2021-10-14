const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();


// ----------------------------------- Login -----------------------------------

app.get('/bookstore/login', (req, res) => {
    const user = {
        name : "Ashutosh",
        email : "ashutosh@gmail.com"
    }

    jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        if(err) res.send('error');
        res.json({
            token
        });
    });
});

app.listen(PORT, () => {
    console.log("Listening to requests");
})
