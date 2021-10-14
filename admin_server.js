
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');


const {createBooks, readBooks, updateBooks, deleteBooks} = require('./database');
const {verifyToken} = require('./verifyToken');


const PORT = process.env.PORT || 8000;

const app = express();

// -------------------------------------------------- Middleware ------------------------------------------------------
app.use(express.json());
app.use(verifyToken);

// -------------------------------------------------- Controller -------------------------------------------------------

//----------------------------- Create -> POST ---------------------------------
app.post('/bookstore', async(req, res) => {

    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, async (err) => {
        if(err) res.sendStatus(403);
        else{
            try {
                const book_details = await req.body;
                createBooks(book_details).then(() => {
                    console.log(book_details);
                })
                .catch((err) => console.log(err));
                res.status(200).send("Sent");
                
            } catch (error) {
                res.status(400).send(error);
            }
        }
    });

    
})

//--------------------- Read -> GET (underworked req) ------------------------
app.get('/bookstore', async (req, res) => {
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, async (err) => {
        if(err) res.sendStatus(403);
        else{
            try {
                const books = await readBooks();
                res.status(200).send(books);
                
            } catch (error) {
                res.status(400).send(error);
            }
        }
    });
    
})

//---------------------------- Update -> PATCH -----------------------------
app.patch('/bookstore/:id', async(req, res) => {
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, async (err) => {
        if(err) res.sendStatus(403);
        else{
            try {
                const updatedBook = await updateBooks(req.params.id, req.body);
                res.status(200).send(updatedBook);
                
            } catch (error) {
                res.status(400).send(error)
            }
        }
    });
    
})

//----------------------------- Delete -> DELETE ------------------------------
app.delete("/bookstore/:id", async (req, res) => {

    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, async (err) => {
        if(err) res.sendStatus(403);
        else{
            try {
                const _id = req.params.id;
                const deletedBook = await deleteBooks(_id);
                if(!_id){
                    return res.status(400).send();
                }
                res.send(deletedBook);
                
            } catch (error) {
                res.status(500).send(error);
            }
        }
    });
    
    
})

app.listen(PORT, () => {
    console.log("Server is listening!!!");
})


