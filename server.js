const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config({path:"../config.env"});
const port = process.env.PORT;

require('./database/connection');

const Book = require('./model/bookModel');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname))
//     }
//   });

// var upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: true
}));


app.get('/get_book', async (req, res) => {
    try {
        const data = await Book.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

app.post('/add_book', async (req, res) => {
    try {
        const data = await Book({
            name: req.body.name,
            image: req.body.image,
            isbn: req.body.isbn,
            pages: req.body.pages,
            price: req.body.price,
            publisher: req.body.publisher,
            version : req.body.version
        });
        const result = await data.save();
        res.status(201).json({ message: "book added", data: result });
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})