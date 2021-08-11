const express = require('express');
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://qkrrbgy:gkdlfn22@study.1yz5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('HelloWorld'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))