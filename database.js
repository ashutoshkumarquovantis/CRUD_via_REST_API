const mongoose = require("mongoose");
const DATABASE_URL = "mongodb+srv://admin:admin@cluster0.62ny9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connection successful..."))
.catch((err) => console.log(err));


// Scheme

const bookSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    author : String,
    present : Boolean,
    description : String,
    rating : Number,
    date: {
        type: Date,
        default : Date.now

    }
});

// collection creation

const BookStore = mongoose.model("BookStore", bookSchema);

// create or insert a book(s)
const createBooks = async (book_details) => {
    try{
        let books;
        if(Array.isArray(book_details)){
            books = [...book_details];
        }
        else{
            books = book_details;
        }
        const result = await BookStore.insertMany(books);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}


// read books
const readBooks = async() => {
    try {
        const result = await BookStore.find();
        return result;
    } catch (error) {
        return error;
    }
}


//update books
const updateBooks = async(_id, data) => {
    try {
        return await BookStore.findByIdAndUpdate(_id, data, {
            new : true
        });        
    } catch (error) {
        return error;
    }
}

// Delete books

const deleteBooks = async(_id) => {
    try {
        return await BookStore.findByIdAndDelete(_id);
    } catch (error) {
        return error;
    }
}

module.exports = {
    createBooks, readBooks, updateBooks, deleteBooks
}

