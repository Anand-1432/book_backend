const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
    console.log('connection established....!');
}).catch((err) => {
    console.log(err);
})