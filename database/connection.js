const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Anand:Anand123@cluster0.a5kwk.mongodb.net/jecsc?retryWrites=true&w=majority').then(() => {
    console.log('connection established....!');
}).catch((err) => {
    console.log(err);
})